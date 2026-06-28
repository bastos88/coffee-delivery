import { prisma } from "../src/prisma.js";

const coffees = [
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c001",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos.",
    price: 1.9,
    image: "/imgs/expresso-tradicional.png",
    tags: ["TRADICIONAL"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c002",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional.",
    price: 2.2,
    image: "/imgs/expresso-americano.png",
    tags: ["TRADICIONAL"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c003",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa.",
    price: 2.5,
    image: "/imgs/expresso-cremoso.png",
    tags: ["TRADICIONAL"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c004",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo.",
    price: 2.9,
    image: "/imgs/expresso-gelado.png",
    tags: ["TRADICIONAL", "GELADO"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c005",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado.",
    price: 2.5,
    image: "/imgs/cafe-leite.png",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c006",
    name: "Latte Macchiato",
    description: "Expresso com o dobro de leite e espuma cremosa.",
    price: 3.2,
    image: "/imgs/macchiato.png",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c007",
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma.",
    price: 3.5,
    image: "/imgs/capuccino.png",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c008",
    name: "Latte",
    description: "Café expresso com uma camada generosa de espuma de leite.",
    price: 3.4,
    image: "/imgs/latte.png",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c009",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma.",
    price: 3.9,
    image: "/imgs/mocaccino.png",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c010",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente.",
    price: 3.7,
    image: "/imgs/hot-chocolate.png",
    tags: ["ESPECIAL", "COM LEITE"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c011",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã.",
    price: 5.5,
    image: "/imgs/cubano.png",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c012",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco.",
    price: 4.2,
    image: "/imgs/havaiano.png",
    tags: ["ESPECIAL"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c013",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias.",
    price: 4.4,
    image: "/imgs/arabe.png",
    tags: ["ESPECIAL"],
  },
  {
    id: "b1f8d9d0-52de-4c99-a8b7-5301f0e3c014",
    name: "Irlandês",
    description:
      "Bebida a base de café, uísque irlandês, açúcar e chantilly.",
    price: 5.9,
    image: "/imgs/irlandes.png",
    tags: ["ESPECIAL", "ALCOÓLICO"],
  },
];

async function main() {
  await Promise.all(
    coffees.map((coffee) =>
      prisma.coffee.upsert({
        where: { id: coffee.id },
        update: coffee,
        create: coffee,
      }),
    ),
  );

  console.log(`${coffees.length} cafés inseridos/atualizados com sucesso.`);
}

main()
  .catch((error) => {
    console.error("Erro ao popular os cafés:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });