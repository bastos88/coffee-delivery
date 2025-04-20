import { CartItems } from './Cartitems';
import { Form } from './Form';
import { CheckOutContainer } from '../Checkout/styles'

export function Checkout() {

    return (
        <CheckOutContainer>
            <div>
                <h1>Complete seu Pedido</h1>
                <Form />
            </div>
            <div>
                <h1>Cafés selecionados</h1>
                <CartItems />
            </div>
        </CheckOutContainer>
    );
}
