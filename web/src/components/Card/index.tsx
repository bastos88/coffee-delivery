import {
  AddToCartButton,
  CardContainer,
  CartContent,
  CoffeeCard,
  ContentCard,
  Description,
  Price,
} from "./styles";

import { Check, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { TransactionsContext } from "../../contexts/transactionsContext";
import { CounterButton } from "../CounterButton";
import { formatCurrency } from "../../utils/formatCurrency";

export function Card() {
  const { transactions, addToCart } = useContext(TransactionsContext);
  const [quantities, setQuantities] = useState<{ [id: string]: number }>({});
  const [addedCoffeeId, setAddedCoffeeId] = useState<string | null>(null);

  const increment = (id: string) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrement = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const handleAddToCart = (id: string, quantity: number) => {
    if (quantity <= 0) return;

    addToCart(id, quantity);
    setAddedCoffeeId(null);

    requestAnimationFrame(() => {
      setAddedCoffeeId(id);
    });

    window.setTimeout(() => {
      setAddedCoffeeId((currentId) => (currentId === id ? null : currentId));
    }, 520);
  };

  return (
    <CardContainer>
      {transactions.map((transaction) => {
        const count = quantities[transaction.id] || 0;

        return (
          <CoffeeCard key={transaction.id}>
            <ContentCard>
              <img src={transaction.image} alt={transaction.name} />

              <div className="tags">
                {transaction.tags.map((tag) => (
                  <h4 key={tag}>{tag}</h4>
                ))}
              </div>
              <p>{transaction.name}</p>
              <Description>{transaction.description}</Description>

              <CartContent>
                <Price>
                  <span>{formatCurrency.format(Number(transaction.price))}</span>
                </Price>

                <CounterButton
                  count={count}
                  onIncrement={() => increment(transaction.id)}
                  onDecrement={() => decrement(transaction.id)}
                />

                <AddToCartButton
                  type="button"
                  onClick={() => handleAddToCart(transaction.id, count)}
                  disabled={count <= 0}
                  aria-label={`Adicionar ${transaction.name} ao carrinho`}
                  $isAdded={addedCoffeeId === transaction.id}
                >
                  {addedCoffeeId === transaction.id ? (
                    <Check size={22} weight="bold" />
                  ) : (
                    <ShoppingCart size={22} weight="fill" />
                  )}
                </AddToCartButton>
              </CartContent>
            </ContentCard>
          </CoffeeCard>
        );
      })}
    </CardContainer>
  );
}
