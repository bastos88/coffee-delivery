import { CardContainer, CartContent, CoffeeCard, ContentCard, Description, Price } from "./styles";

import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { CounterButton } from "../CounterButton";

export function Card() {
    const { transactions, addToCart } = useContext(TransactionsContext);
    const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

    const increment = (id: number) => {
        setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const decrement = (id: number) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 0) - 1, 0)
        }));
    };
    return (
        <CardContainer>
            {transactions.map(transaction => {
                const count = quantities[transaction.id] || 0;
                return (
                    <CoffeeCard key={transaction.id}>
                        <ContentCard>
                            <img src={transaction.image} alt="" />
                            <h4>{transaction.description}</h4>
                            <p>{transaction.category}</p>
                            <Description>{transaction.text}</Description>
                            <CartContent>
                                <Price>
                                    <span>R$</span>
                                    <span>{transaction.price}</span>
                                </Price>
                                <CounterButton
                                    count={quantities[transaction.id] || 0}
                                    onIncrement={() => increment(transaction.id)}
                                    onDecrement={() => decrement(transaction.id)}
                                />
                                <span
                                    className="icon-wrapper"
                                    onClick={() => addToCart(transaction.id, count)}>
                                    <ShoppingCart size={22} weight="fill" />
                                </span>
                            </CartContent>
                        </ContentCard>
                    </CoffeeCard>
                )
            }
            )}
        </CardContainer>
    )
}
// <p>Total: R$ {total.toFixed(2)}</p>//