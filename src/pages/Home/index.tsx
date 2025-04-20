import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { CoffeeCardContainer, IntroContainer } from "./styles"
import coffeeIntro from '../../assets/coffee-delivery.png'
import { Card } from "../../components/Card"


export function Home() {
    return (
        <>
            <IntroContainer>
                <div>
                    <div>
                        <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a <br />qualquer hora</span>
                        <div>
                            <ul>
                                <li>
                                    <span className="icon-wrapper">
                                        <ShoppingCart size={18} weight="fill" />
                                    </span>
                                    <p>Compra simples e segura</p>
                                </li>
                                <li>
                                    <span className="icon-wrapper">
                                        <Package size={28} weight="fill" />
                                    </span>
                                    <p>Embalagem mantém o café intacto</p>
                                </li>
                                <li>
                                    <span className="icon-wrapper">
                                        <Timer size={18} weight="fill" />
                                    </span>
                                    <p>Entrega rápida e rastreada</p>

                                </li>
                                <li>
                                    <span className="icon-wrapper">
                                        <Coffee size={18} weight="fill" />
                                    </span>
                                    <p>café chega fresquinho até você</p>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={coffeeIntro} alt="" />
                </div>
            </IntroContainer>
            <CoffeeCardContainer>
                <h1>
                    Nossos cafés
                </h1>
                <Card />
            </CoffeeCardContainer>
        </>
    )
}