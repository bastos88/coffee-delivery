import { HeaderContainer } from "./styles"
import coffeeLogo from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { Link } from "react-router-dom"

export function Header() {
    const { totalItems, cartAnimationKey } = useContext(TransactionsContext)
    const [isShaking, setIsShaking] = useState(false)

    useEffect(() => {
        if (!cartAnimationKey) return;
        setIsShaking(true);
        const t = setTimeout(() => setIsShaking(false), 650);
        return () => clearTimeout(t);
    }, [cartAnimationKey]);

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
                <Link id="cart-target" to="/checkout" aria-label={`Carrinho com ${totalItems} itens`}>
                    <ShoppingCart size={22} weight="fill" className={`${isShaking ? 'shake' : ''}`} aria-hidden="true" />
                    <span className="cart-count" aria-live="polite">{totalItems}</span>
                </Link>
            </nav>
        </HeaderContainer>
    )
}