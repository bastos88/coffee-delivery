import { CartItems } from './Cartitems';
import { Form } from './Form';
import {
    CheckOutContainer,
    ConfirmOrderButton,
    FeedbackModal,
    FeedbackModalOverlay,
} from '../Checkout/styles'
import { useContext, useState } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import type {
    AddressFormData,
    CreateOrderPayload,
    PaymentDetailsFormData,
    PaymentMethod,
} from '../../types/order';
import { apiBaseUrl } from '../../utils/api';

const initialAddress: AddressFormData = {
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    uf: "",
};

const initialPaymentDetails: PaymentDetailsFormData = {
    mbWayPhone: "",
    multibancoEmail: "",
    cardholderName: "",
    cardLastDigits: "",
    cashChangeFor: "",
};

interface ApiErrorResponse {
    message?: string;
}

interface FeedbackState {
    type: "success" | "error";
    title: string;
    message: string;
}

export function Checkout() {
    const { transactions, counts, setCount } = useContext(TransactionsContext);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
    const [address, setAddress] = useState<AddressFormData>(initialAddress);
    const [paymentDetails, setPaymentDetails] =
        useState<PaymentDetailsFormData>(initialPaymentDetails);
    const [feedback, setFeedback] = useState<FeedbackState | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChangeAddress(field: keyof AddressFormData, value: string) {
        setAddress((state) => ({
            ...state,
            [field]: value,
        }));
    }

    function handleChangePaymentDetails(
        field: keyof PaymentDetailsFormData,
        value: string
    ) {
        setPaymentDetails((state) => ({
            ...state,
            [field]: value,
        }));
    }

    function showFeedback(type: FeedbackState["type"], title: string, message: string) {
        setFeedback({
            type,
            title,
            message,
        });
    }

    function getPaymentDetailsError() {
        if (!paymentMethod) return "Selecione a forma de pagamento.";

        if (paymentMethod === "MB_WAY") {
            const phoneDigits = paymentDetails.mbWayPhone.replace(/\D/g, "");
            if (phoneDigits.length !== 9) {
                return "Informe um telemóvel MB WAY válido com 9 dígitos.";
            }
        }

        if (paymentMethod === "MULTIBANCO") {
            const email = paymentDetails.multibancoEmail.trim();
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                return "Informe um email válido para associar a referência MULTIBANCO.";
            }
        }

        if (paymentMethod === "CARD") {
            if (!paymentDetails.cardholderName.trim()) {
                return "Informe o nome no cartão bancário.";
            }

            if (!/^\d{4}$/.test(paymentDetails.cardLastDigits)) {
                return "Informe os últimos 4 dígitos do cartão bancário.";
            }
        }

        return null;
    }

    async function handleSubmitOrder() {
        const items = transactions
            .filter((coffee) => (counts[coffee.id] || 0) > 0)
            .map((coffee) => ({
                coffeeId: coffee.id,
                quantity: counts[coffee.id],
            }));

        const hasMissingAddress =
            !address.cep.trim() ||
            !address.street.trim() ||
            !address.number.trim() ||
            !address.neighborhood.trim() ||
            !address.city.trim() ||
            !address.uf.trim();

        if (hasMissingAddress) {
            showFeedback(
                "error",
                "Dados em falta",
                "Preencha o endereço de entrega antes de confirmar o pedido."
            );
            return;
        }

        const paymentDetailsError = getPaymentDetailsError();

        if (paymentDetailsError) {
            showFeedback("error", "Pagamento incompleto", paymentDetailsError);
            return;
        }

        if (!paymentMethod) return;

        const selectedPaymentMethod = paymentMethod;

        if (items.length === 0) {
            showFeedback(
                "error",
                "Carrinho vazio",
                "Selecione ao menos um café antes de confirmar o pedido."
            );
            return;
        }

        const payload: CreateOrderPayload = {
            ...address,
            paymentMethod: selectedPaymentMethod,
            items,
        };

        try {
            setIsSubmitting(true);

            const response = await fetch(`${apiBaseUrl}/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const error = (await response
                    .json()
                    .catch(() => null)) as ApiErrorResponse | null;
                throw new Error(error?.message ?? "Erro ao finalizar pedido.");
            }

            setCount({});
            setAddress(initialAddress);
            setPaymentDetails(initialPaymentDetails);
            setPaymentMethod(null);
            showFeedback(
                "success",
                "Pedido feito com sucesso",
                "O seu pedido foi registado. Em breve receberá a confirmação do método de pagamento escolhido."
            );
        } catch (error) {
            console.error("Erro ao finalizar pedido:", error);
            const message =
                error instanceof Error
                    ? error.message
                    : "Não foi possível finalizar o pedido.";

            showFeedback(
                "error",
                "Pedido não efetuado",
                message
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <CheckOutContainer>
            <div>
                <h1>Complete seu Pedido</h1>
                <Form
                    address={address}
                    onChangeAddress={handleChangeAddress}
                    paymentMethod={paymentMethod}
                    paymentDetails={paymentDetails}
                    onSelectPaymentMethod={setPaymentMethod}
                    onChangePaymentDetails={handleChangePaymentDetails} />
            </div>
            <div>
                <h1>Cafés selecionados</h1>
                <CartItems>
                    <ConfirmOrderButton
                        type="button"
                        disabled={isSubmitting}
                        onClick={handleSubmitOrder}
                    >
                        {isSubmitting ? "Finalizando..." : "Confirmar pedido"}
                    </ConfirmOrderButton>
                </CartItems>
            </div>
            {feedback && (
                <FeedbackModalOverlay
                    role="presentation"
                    onClick={() => setFeedback(null)}
                >
                    <FeedbackModal
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="feedback-modal-title"
                        $type={feedback.type}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <span>{feedback.type === "success" ? "✓" : "!"}</span>
                        <h2 id="feedback-modal-title">{feedback.title}</h2>
                        <p>{feedback.message}</p>
                        <button type="button" onClick={() => setFeedback(null)}>
                            Entendi
                        </button>
                    </FeedbackModal>
                </FeedbackModalOverlay>
            )}
        </CheckOutContainer>
    );
}
