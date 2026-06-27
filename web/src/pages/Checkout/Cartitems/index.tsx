import { useContext } from "react";
import type { ReactNode } from "react";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import { CartDetail } from "../../../components/CartDetail";
import { formatCurrency } from "../../../utils/formatCurrency";
import {
  CartSummaryCard,
  EmptyCartMessage,
  OrderSummary,
  ScrollableCoffeeList,
} from "./styles";

interface CartItemsProps {
  children?: ReactNode;
}

export function CartItems({ children }: CartItemsProps) {
  const { transactions, counts, total, totalItems } =
    useContext(TransactionsContext);

  const selectedCoffees = transactions.filter(
    (transaction) => (counts[transaction.id] || 0) > 0
  );

  return (
    <CartSummaryCard>
      <ScrollableCoffeeList>
        {selectedCoffees.length > 0 ? (
          selectedCoffees.map((coffee) => (
            <CartDetail key={coffee.id} coffeeId={coffee.id} />
          ))
        ) : (
          <EmptyCartMessage>Nenhum café selecionado.</EmptyCartMessage>
        )}
      </ScrollableCoffeeList>

      <OrderSummary>
        <div>
          <span>Total de itens</span>
          <strong>{totalItems}</strong>
        </div>

        <div className="order-total">
          <span>Total do pedido</span>
          <strong>{formatCurrency.format(total)}</strong>
        </div>
      </OrderSummary>

      {children}
    </CartSummaryCard>
  );
}
