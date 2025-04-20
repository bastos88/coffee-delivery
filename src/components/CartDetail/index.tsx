import { Trash } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { CounterButton } from "../CounterButton";
import { Detail } from "./styles";

interface CartDetailProps {
    coffeeId: number;
}

export function CartDetail({ coffeeId }: CartDetailProps) {
    const { transactions, counts, setCount } = useContext(TransactionsContext);
    const coffee = transactions.find(item => Number(item.id) === coffeeId);
    if (!coffee) return null;

    const quantidade = counts[coffeeId] || 0;
    const precoUnitario = parseFloat(coffee.price.toString().replace(",", "."));
    const precoTotal = (precoUnitario * quantidade).toFixed(2);



    const handleRemove = () => {
        const updated = { ...counts };
        delete updated[coffeeId];
        setCount(updated);
    };

    return (
        <Detail>
            <img src={coffee.image} alt={coffee.category} />
            <div className="info">
                <h4>{coffee.category}</h4>
                <div className="actions">
                    <CounterButton coffeeId={coffeeId} />
                    <button className="remove" onClick={handleRemove}>
                        <Trash size={16} /> REMOVER
                    </button>
                </div>
            </div>
            <span className="price">R$ {precoTotal}</span>
        </Detail>
    );
}