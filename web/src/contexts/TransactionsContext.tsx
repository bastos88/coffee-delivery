import { ReactNode, useEffect, useState } from "react";
import { TransactionsContext } from "./transactionsContext";
import type { Coffee } from "../types/order";
import { apiBaseUrl } from "../utils/api";

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Coffee[]>([]);
  const [counts, setCount] = useState<{ [id: string]: number }>({});

  async function loadTransactions() {
    try {
      const response = await fetch(`${apiBaseUrl}/coffees`);
      const data = await response.json();

      setTransactions(data);
    } catch (error) {
      console.error("Erro ao buscar cafés:", error);
    }
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  const incrementCount = (id: string) => {
    setCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrementCount = (id: string) => {
    setCount((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const totalItems = Object.values(counts).reduce(
    (acc, quantidade) => acc + quantidade,
    0
  );

  const total = transactions.reduce((acc, transaction) => {
    const quantidade = counts[transaction.id] || 0;
    const preco = Number(transaction.price);

    return acc + quantidade * preco;
  }, 0);

  function addToCart(id: string, quantity: number) {
    if (quantity > 0) {
      setCount((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + quantity,
      }));
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        counts,
        decrementCount,
        incrementCount,
        total,
        totalItems,
        setCount,
        addToCart,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
