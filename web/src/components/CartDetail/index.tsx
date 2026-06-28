import { Trash } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { CounterButton } from "../CounterButton";
import { Detail } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";

interface CartDetailProps {
  coffeeId: string;
}

export function CartDetail({ coffeeId }: CartDetailProps) {
  const { transactions, counts, setCount } = useContext(TransactionsContext);

  const coffee = transactions.find((item) => item.id === coffeeId);

  if (!coffee) return null;

  const quantidade = counts[coffeeId] || 0;
  const precoUnitario = Number(coffee.price);
  const precoTotal = formatCurrency.format(precoUnitario * quantidade);

  const handleRemove = () => {
    const updated = { ...counts };
    delete updated[coffeeId];
    setCount(updated);
  };

  return (
    <Detail>
      <img src={coffee.image} alt={coffee.name} />

      <div className="info">
        <h4>{coffee.name}</h4>

        <div className="actions">
          <CounterButton coffeeId={coffeeId} />

          <button className="remove" onClick={handleRemove}>
            <Trash size={16} /> REMOVER
          </button>
        </div>
      </div>

      <span className="price">{precoTotal}</span>
    </Detail>
  );
}
