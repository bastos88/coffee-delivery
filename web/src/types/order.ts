export type PaymentMethod =
  | "MB_WAY"
  | "MULTIBANCO"
  | "CARD"
  | "CASH_ON_DELIVERY";

export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

export interface AddressFormData {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
}

export interface PaymentDetailsFormData {
  mbWayPhone: string;
  multibancoEmail: string;
  cardholderName: string;
  cardLastDigits: string;
  cashChangeFor: string;
}

export interface CartItemPayload {
  coffeeId: string;
  quantity: number;
}

export interface CreateOrderPayload extends AddressFormData {
  paymentMethod: PaymentMethod;
  items: CartItemPayload[];
}
