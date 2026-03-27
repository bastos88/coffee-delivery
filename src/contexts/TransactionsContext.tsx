/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useEffect, useState } from "react";
interface Transaction {
    id: number;
    description: string;
    category: string;
    text: string;
    price: number;
    image: string;
}

interface TransactionContextType {
    transactions: Transaction[];
    counts: { [id: number]: number };
    incrementCount: (id: number) => void;
    decrementCount: (id: number) => void;
    total: number;
    totalItems: number;
    setCount: React.Dispatch<React.SetStateAction<{ [id: number]: number }>>;
    addToCart: (id: number, quantity: number) => void;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [counts, setCount] = useState<{ [id: number]: number }>({});

    async function loadTransactions() {
        try {
        const response = await fetch('http://localhost:3001/transactions')
        const data = await response.json();

        setTransactions(data)}catch(error) {
    console.error('Erro ao buscar transações:', error)
  }
}



    useEffect(() => {
        loadTransactions();
    }, [])



    const incrementCount = (id: number) => {
        setCount(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const decrementCount = (id: number) => {
        setCount(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 0) - 1, 0)
        }));
    };
    const totalItems = Object.values(counts).reduce((acc, quantidade) => acc + quantidade, 0);
    const total = transactions.reduce((acc, transaction) => {
        const quantidade = counts[transaction.id] || 0;
        const preco = parseFloat(transaction.price.toString().replace(",", "."));
        return acc + quantidade * preco;
    }, 0);

    function addToCart(id: number, quantity: number) {
        if (quantity > 0) {
            setCount(prev => ({
                ...prev,
                [id]: (prev[id] || 0) + quantity,
            }));
        }
    }



    return (
        <TransactionsContext.Provider value={{ transactions, counts, decrementCount, incrementCount, total, totalItems, setCount, addToCart }}>
            {children}
        </TransactionsContext.Provider>
    )
}