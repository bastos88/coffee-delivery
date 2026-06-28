import express from "express";
import cors from "cors";
import { prisma } from "./prisma.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/coffees", async (_req, res) => {
  const coffees = await prisma.coffee.findMany();

  return res.json(coffees);
});

type PaymentMethod =
  | "MB_WAY"
  | "MULTIBANCO"
  | "CARD"
  | "CASH_ON_DELIVERY";

interface CreateOrderItemRequest {
  coffeeId: string;
  quantity: number;
}

interface CreateOrderRequest {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  paymentMethod: PaymentMethod;
  items: CreateOrderItemRequest[];
}

const paymentMethods: PaymentMethod[] = [
  "MB_WAY",
  "MULTIBANCO",
  "CARD",
  "CASH_ON_DELIVERY",
];

function isBlank(value: unknown) {
  return typeof value !== "string" || value.trim().length === 0;
}

app.post("/orders", async (req, res) => {
  const {
    cep,
    street,
    number,
    complement,
    neighborhood,
    city,
    paymentMethod,
    items,
  } = req.body as CreateOrderRequest;

  if (
    isBlank(cep) ||
    isBlank(street) ||
    isBlank(number) ||
    isBlank(neighborhood) ||
    isBlank(city) ||
    !paymentMethod ||
    !paymentMethods.includes(paymentMethod)
  ) {
    return res.status(400).json({
      message: "Endereço e forma de pagamento são obrigatórios.",
    });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      message: "O pedido precisa ter ao menos um item.",
    });
  }

  const hasInvalidItem = items.some(
    (item) =>
      isBlank(item.coffeeId) ||
      !Number.isInteger(item.quantity) ||
      item.quantity <= 0,
  );

  if (hasInvalidItem) {
    return res.status(400).json({
      message: "Todos os itens precisam ter café e quantidade válida.",
    });
  }

  const coffeeIds = [...new Set(items.map((item) => item.coffeeId))];

  const coffees = await prisma.coffee.findMany({
    where: {
      id: {
        in: coffeeIds,
      },
    },
  });

  if (coffees.length !== coffeeIds.length) {
    return res.status(400).json({
      message: "Um ou mais cafés informados não existem.",
    });
  }

  const coffeesById = new Map(
    coffees.map((coffee) => [coffee.id, coffee]),
  );

  const total = items.reduce<number>((accumulator, item) => {
    const coffee = coffeesById.get(item.coffeeId);

    if (!coffee) {
      return accumulator;
    }

    return accumulator + Number(coffee.price) * item.quantity;
  }, 0);

  try {
    const order = await prisma.order.create({
      data: {
        cep: cep.trim(),
        street: street.trim(),
        number: number.trim(),
        complement: complement?.trim() || null,
        neighborhood: neighborhood.trim(),
        city: city.trim(),
        paymentMethod,
        total,
        items: {
          create: items.map((item) => {
            const coffee = coffeesById.get(item.coffeeId);

            if (!coffee) {
              throw new Error("Café não encontrado após validação.");
            }

            return {
              coffeeId: item.coffeeId,
              quantity: item.quantity,
              price: coffee.price,
            };
          }),
        },
      },
      include: {
        items: {
          include: {
            coffee: true,
          },
        },
      },
    });

    return res.status(201).json(order);
  } catch (error) {
    console.error("Erro ao criar pedido:", error);

    return res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : "Erro interno ao criar o pedido.",
    });
  }
});

app.listen(3333, () => {
  console.log("API rodando em http://localhost:3333");
});
