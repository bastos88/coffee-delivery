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
                    <label className="sr-only" htmlFor="cep">CEP</label>
                    <input id="cep" name="cep" type="text" placeholder="CEP" className="cep" />

                    <label className="sr-only" htmlFor="rua">Rua</label>
                    <input id="rua" name="rua" type="text" placeholder="Rua" className="full" />

                    <div className="row">
                        <label className="sr-only" htmlFor="numero">Número</label>
                        <input id="numero" name="numero" type="text" placeholder="Número" />
                        <div className="complemento-wrapper">
                            <label className="sr-only" htmlFor="complemento">Complemento</label>
                            <input id="complemento" name="complemento" type="text" placeholder="Complemento" aria-describedby="complemento-optional" />
                            <span id="complemento-optional" className="optional">Opcional</span>
                        </div>
                    </div>

                    <div className="row">
                        <label className="sr-only" htmlFor="bairro">Bairro</label>
                        <input id="bairro" name="bairro" type="text" placeholder="Bairro" />

                        <label className="sr-only" htmlFor="cidade">Cidade</label>
                        <input id="cidade" name="cidade" type="text" placeholder="Cidade" />

                        <label className="sr-only" htmlFor="uf">UF</label>
                        <input id="uf" name="uf" type="text" placeholder="UF" className="uf" />
                    </div>
                </AddressForm>
            </FormWrapper>
            <Payment />

        </FormContainer>

    )
}