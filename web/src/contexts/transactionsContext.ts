import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Coffee } from "../types/order";

export interface TransactionsContextType {
  transactions: Coffee[];
  counts: { [id: string]: number };
  incrementCount: (id: string) => void;
  decrementCount: (id: string) => void;
  total: number;
  totalItems: number;
  setCount: Dispatch<SetStateAction<{ [id: string]: number }>>;
  addToCart: (id: string, quantity: number) => void;
}

export const TransactionsContext = createContext({} as TransactionsContextType);
