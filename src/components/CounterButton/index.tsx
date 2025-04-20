import { useContext } from "react";
import { Button, Count, CounterContainer } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";

interface CounterButtonProps {
    count?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
    coffeeId?: number;
}

export function CounterButton({
    count,
    onIncrement,
    onDecrement,
    coffeeId,
}: CounterButtonProps) {
    const { counts, incrementCount, decrementCount } = useContext(TransactionsContext);

    const finalCount = count ?? (coffeeId ? counts[coffeeId] || 0 : 0);

    const handleIncrement = () => {
        if (onIncrement) return onIncrement();
        if (coffeeId !== undefined) incrementCount(coffeeId);
    };

    const handleDecrement = () => {
        if (onDecrement) return onDecrement();
        if (coffeeId !== undefined) decrementCount(coffeeId);
    };


    return (
        <CounterContainer>
            <Button onClick={handleDecrement}>-</Button>
            <Count>{finalCount}</Count>
            <Button onClick={handleIncrement}>+</Button>
        </CounterContainer>
    );
}
