import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Header, PaymentContainer, PaymentOptions } from "./styles";
import { useState } from "react";

export function Payment() {
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
    return (
        <PaymentContainer>
            <Header>
                <CurrencyDollar size={32} color="#8047F8" />
                <div>
                    <p>
                        Pagamento
                    </p>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
            </Header>
            <PaymentOptions>
                <label
                    className={selectedMethod === "credit" ? "active" : ""}
                    onClick={() => setSelectedMethod("credit")}
                >
                    <input type="radio" value="credit" checked={selectedMethod === "credit"} readOnly />
                    <CreditCard size={16} />
                    CARTÃO DE CRÉDITO
                </label>

                <label
                    className={selectedMethod === "debit" ? "active" : ""}
                    onClick={() => setSelectedMethod("debit")}
                >
                    <input type="radio" value="debit" checked={selectedMethod === "debit"} readOnly />
                    <Bank size={16} />
                    CARTÃO DE DÉBITO
                </label>

                <label
                    className={selectedMethod === "money" ? "active" : ""}
                    onClick={() => setSelectedMethod("money")}
                >
                    <input type="radio" value="money" checked={selectedMethod === "money"} readOnly />
                    <Money size={16} />
                    DINHEIRO
                </label>
            </PaymentOptions>
        </PaymentContainer>
    )
}