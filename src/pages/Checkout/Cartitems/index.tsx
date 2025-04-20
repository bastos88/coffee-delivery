import { useContext } from "react";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import { CartDetail } from "../../../components/CartDetail";
import { SelectedCoffeeList } from "./styles";

export function CartItems() {
    const { transactions, counts } = useContext(TransactionsContext);

    // Filtra cafés com quantidade maior que 0
    const selectedCoffees = transactions.filter(
        (transaction) => (counts[Number(transaction.id)] || 0) > 0
    );

    console.log("selectedCoffees", selectedCoffees); // debug útil

    return (
        <div style={{ width: "100%", maxWidth: "28rem" }}>
            <SelectedCoffeeList>
                {selectedCoffees.map((coffee) => (
                    <CartDetail key={coffee.id} coffeeId={Number(coffee.id)} />
                ))}
            </SelectedCoffeeList>
        </div>
    );
}
