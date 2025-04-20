import { HeaderContainer } from "./styles"
import coffeeLogo from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { Link } from "react-router-dom"
export function Header() {
    const { totalItems } = useContext(TransactionsContext)

    return (
        <HeaderContainer>
            <Link to="/">
                <img src={coffeeLogo} alt="" />
            </Link>
            <nav>
                <a href="">
                    <MapPin size={24} weight="fill" />
                    Porto - Portugal
                </a>
                <Link to="/checkout">
                    <ShoppingCart size={22} weight="fill" />
                    {totalItems}
                </Link>
            </nav>
        </HeaderContainer>
    )
}