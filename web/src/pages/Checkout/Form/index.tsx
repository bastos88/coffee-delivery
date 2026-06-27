import { MapPinLine } from "phosphor-react";
import { AddressForm, FormContainer, FormWrapper, Header } from "./styles";
import { Payment } from "../Payment";
import type {
  AddressFormData,
  PaymentDetailsFormData,
  PaymentMethod,
} from "../../../types/order";

interface FormProps {
  address: AddressFormData;
  onChangeAddress: (field: keyof AddressFormData, value: string) => void;
  paymentMethod: PaymentMethod | null;
  paymentDetails: PaymentDetailsFormData;
  onSelectPaymentMethod: (method: PaymentMethod) => void;
  onChangePaymentDetails: (
    field: keyof PaymentDetailsFormData,
    value: string
  ) => void;
}

export function Form({
  address,
  onChangeAddress,
  paymentMethod,
  paymentDetails,
  onSelectPaymentMethod,
  onChangePaymentDetails,
}: FormProps) {
  return (
    <FormContainer>
      <FormWrapper>
        <Header>
          <MapPinLine size={32} color="#C47F17" />

          <div>
            <p>Endereço de entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </Header>

        <AddressForm>
          <input
            type="text"
            placeholder="CEP"
            className="cep"
            value={address.cep}
            onChange={(event) => onChangeAddress("cep", event.target.value)}
          />
          <input
            type="text"
            placeholder="Rua"
            className="full"
            value={address.street}
            onChange={(event) => onChangeAddress("street", event.target.value)}
          />

          <div className="row">
            <input
              type="text"
              placeholder="Número"
              value={address.number}
              onChange={(event) =>
                onChangeAddress("number", event.target.value)
              }
            />

            <div className="complemento-wrapper">
              <input
                type="text"
                placeholder="Complemento"
                value={address.complement}
                onChange={(event) =>
                  onChangeAddress("complement", event.target.value)
                }
              />
              <span className="optional">Opcional</span>
            </div>
          </div>

          <div className="row">
            <input
              type="text"
              placeholder="Bairro"
              value={address.neighborhood}
              onChange={(event) =>
                onChangeAddress("neighborhood", event.target.value)
              }
            />
            <input
              type="text"
              placeholder="Cidade"
              value={address.city}
              onChange={(event) => onChangeAddress("city", event.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              className="uf"
              value={address.uf}
              onChange={(event) => onChangeAddress("uf", event.target.value)}
            />
          </div>
        </AddressForm>
      </FormWrapper>

      <Payment
        selectedMethod={paymentMethod}
        onSelectMethod={onSelectPaymentMethod}
        paymentDetails={paymentDetails}
        onChangePaymentDetails={onChangePaymentDetails}
      />
    </FormContainer>
  );
}
