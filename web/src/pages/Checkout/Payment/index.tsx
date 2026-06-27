import type { ReactNode } from "react";
import {
  Bank,
  CheckCircle,
  CreditCard,
  CurrencyDollar,
  DeviceMobile,
  Money,
} from "phosphor-react";
import {
  Header,
  PaymentDetailsPanel,
  PaymentNotice,
  PaymentOptionContent,
  PaymentOptions,
  PaymentContainer,
} from "./styles";
import type {
  PaymentDetailsFormData,
  PaymentMethod,
} from "../../../types/order";

interface PaymentProps {
  selectedMethod: PaymentMethod | null;
  onSelectMethod: (method: PaymentMethod) => void;
  paymentDetails: PaymentDetailsFormData;
  onChangePaymentDetails: (
    field: keyof PaymentDetailsFormData,
    value: string
  ) => void;
}

interface PaymentOption {
  method: PaymentMethod;
  title: string;
  description: string;
  icon: ReactNode;
  badge?: string;
  isFeatured?: boolean;
}

const paymentOptions: PaymentOption[] = [
  {
    method: "MB_WAY",
    title: "MB WAY",
    description: "Pague de forma rápida através da app MB WAY",
    icon: <DeviceMobile size={24} weight="duotone" />,
    isFeatured: true,
  },
  {
    method: "MULTIBANCO",
    title: "Referência MULTIBANCO",
    description: "Receba os dados para pagamento após confirmar o pedido",
    icon: <Bank size={24} weight="duotone" />,
  },
  {
    method: "CARD",
    title: "Cartão bancário",
    description: "Visa, Mastercard ou cartão Multibanco",
    icon: <CreditCard size={24} weight="duotone" />,
  },
  {
    method: "CASH_ON_DELIVERY",
    title: "Numerário na entrega",
    description: "Pague ao receber o pedido",
    icon: <Money size={24} weight="duotone" />,
    badge: "Disponível no Porto",
  },
];

export function Payment({
  selectedMethod,
  onSelectMethod,
  paymentDetails,
  onChangePaymentDetails,
}: PaymentProps) {
  function renderPaymentDetailsForm() {
    if (!selectedMethod) return null;

    if (selectedMethod === "MB_WAY") {
      return (
        <PaymentDetailsPanel>
          <div>
            <strong>Dados para MB WAY</strong>
            <span>Indique o telemóvel associado à app MB WAY.</span>
          </div>

          <label>
            Telemóvel
            <input
              type="tel"
              inputMode="tel"
              placeholder="912 345 678"
              value={paymentDetails.mbWayPhone}
              onChange={(event) =>
                onChangePaymentDetails("mbWayPhone", event.target.value)
              }
            />
          </label>
        </PaymentDetailsPanel>
      );
    }

    if (selectedMethod === "MULTIBANCO") {
      return (
        <PaymentDetailsPanel>
          <div>
            <strong>Dados para referência MULTIBANCO</strong>
            <span>
              Usaremos este email apenas para associar a referência ao pedido.
            </span>
          </div>

          <label>
            Email
            <input
              type="email"
              placeholder="nome@email.pt"
              value={paymentDetails.multibancoEmail}
              onChange={(event) =>
                onChangePaymentDetails("multibancoEmail", event.target.value)
              }
            />
          </label>
        </PaymentDetailsPanel>
      );
    }

    if (selectedMethod === "CARD") {
      return (
        <PaymentDetailsPanel>
          <div>
            <strong>Dados do cartão bancário</strong>
            <span>
              Nesta fase não recolhemos número completo, validade ou CVV.
            </span>
          </div>

          <div className="payment-details-grid">
            <label>
              Nome no cartão
              <input
                type="text"
                placeholder="Nome e apelido"
                value={paymentDetails.cardholderName}
                onChange={(event) =>
                  onChangePaymentDetails("cardholderName", event.target.value)
                }
              />
            </label>

            <label>
              Últimos 4 dígitos
              <input
                type="text"
                inputMode="numeric"
                maxLength={4}
                placeholder="1234"
                value={paymentDetails.cardLastDigits}
                onChange={(event) =>
                  onChangePaymentDetails(
                    "cardLastDigits",
                    event.target.value.replace(/\D/g, "")
                  )
                }
              />
            </label>
          </div>
        </PaymentDetailsPanel>
      );
    }

    return (
      <PaymentDetailsPanel>
        <div>
          <strong>Numerário na entrega</strong>
          <span>Se precisar de troco, indique o valor em euros.</span>
        </div>

        <label>
          Troco para
          <input
            type="text"
            inputMode="decimal"
            placeholder="Ex.: 20,00 €"
            value={paymentDetails.cashChangeFor}
            onChange={(event) =>
              onChangePaymentDetails("cashChangeFor", event.target.value)
            }
          />
        </label>
      </PaymentDetailsPanel>
    );
  }

  return (
    <PaymentContainer>
      <Header>
        <CurrencyDollar size={32} color="#8047F8" />

        <div>
          <p>Método de pagamento</p>
          <span>Escolha como prefere pagar o seu pedido.</span>
        </div>
      </Header>

      <PaymentOptions>
        {paymentOptions.map((option) => {
          const isSelected = selectedMethod === option.method;

          return (
            <label
              key={option.method}
              className={isSelected ? "active" : ""}
              data-featured={option.isFeatured ? "true" : undefined}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={option.method}
                checked={isSelected}
                onChange={() => onSelectMethod(option.method)}
              />

              <PaymentOptionContent>
                <div className="payment-icon">{option.icon}</div>

                <div className="payment-copy">
                  <div>
                    <strong>{option.title}</strong>
                    {option.badge && <span>{option.badge}</span>}
                  </div>
                  <p>{option.description}</p>
                </div>

                <CheckCircle
                  className="payment-check"
                  size={20}
                  weight="fill"
                />
              </PaymentOptionContent>
            </label>
          );
        })}
      </PaymentOptions>

      {renderPaymentDetailsForm()}

      <PaymentNotice>
        O pagamento será confirmado após a finalização do pedido.
      </PaymentNotice>
    </PaymentContainer>
  );
}
