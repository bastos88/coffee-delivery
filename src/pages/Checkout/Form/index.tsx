import { MapPinLine } from "phosphor-react"
import { AddressForm, FormContainer, FormWrapper, Header } from "./styles"
import { Payment } from "../Payment"


export function Form() {
    return (
        <FormContainer>
            <FormWrapper>
                <Header>
                    <MapPinLine size={32} color="#C47F17" />
                    <div>
                        <p>
                            Endereço de entrega
                        </p>
                        <span>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                </Header>
                <AddressForm>
                    <input type="text" placeholder="CEP" className="cep" />
                    <input type="text" placeholder="Rua" className="full" />

                    <div className="row">
                        <input type="text" placeholder="Número" />
                        <div className="complemento-wrapper">
                            <input type="text" placeholder="Complemento" />
                            <span className="optional">Opcional</span>
                        </div>
                    </div>

                    <div className="row">
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" className="uf" />
                    </div>
                </AddressForm>
            </FormWrapper>
            <Payment />

        </FormContainer>

    )
}