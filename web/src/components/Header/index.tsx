import {
    CartBadge,
    CartIconButton,
    HeaderActions,
    HeaderContainer,
    HeaderContent,
    LocationBadge,
    MobileMenuButton,
    MobileNavigation,
    NavigationLinks,
} from "./styles"
import coffeeLogo from "../../assets/coffee-logo.svg";
import { List, MapPin, ShoppingCart, X } from "phosphor-react"
import { useContext, useEffect, useRef, useState } from "react"
import { TransactionsContext } from "../../contexts/transactionsContext"
import { Link } from "react-router-dom"
export function Header() {
    const { totalItems } = useContext(TransactionsContext)
    const previousTotalItems = useRef(totalItems)
    const [shouldAnimateCart, setShouldAnimateCart] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        if (totalItems > previousTotalItems.current) {
            setShouldAnimateCart(false)

            requestAnimationFrame(() => {
                setShouldAnimateCart(true)
            })

            const animationTimer = window.setTimeout(() => {
                setShouldAnimateCart(false)
            }, 520)

            previousTotalItems.current = totalItems
            return () => window.clearTimeout(animationTimer)
        }

        previousTotalItems.current = totalItems
    }, [totalItems])

    function handleAnchorClick() {
        setIsMobileMenuOpen(false)
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <Link
                    to="/"
                    aria-label="Coffee Delivery - página inicial"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <img src={coffeeLogo} alt="" />
                </Link>

                <NavigationLinks aria-label="Navegação principal">
                    <Link to="/" className="active">
                        Início
                    </Link>
                    <a href="/#coffees" onClick={handleAnchorClick}>
                        Cafés
                    </a>
                    <a href="/#how-it-works" onClick={handleAnchorClick}>
                        Como funciona
                    </a>
                </NavigationLinks>

                <HeaderActions>
                    <LocationBadge>
                        <MapPin size={24} weight="fill" />
                        Porto - Portugal
                    </LocationBadge>
                    <CartIconButton
                        to="/checkout"
                        aria-label={`Carrinho com ${totalItems} itens`}
                        $shouldAnimateCart={shouldAnimateCart}
                    >
                        <ShoppingCart size={22} weight="fill" />
                        <CartBadge $shouldAnimateCart={shouldAnimateCart}>
                            {totalItems}
                        </CartBadge>
                    </CartIconButton>
                    <MobileMenuButton
                        type="button"
                        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen((state) => !state)}
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <List size={22} />}
                    </MobileMenuButton>
                </HeaderActions>

                <MobileNavigation
                    aria-label="Navegação mobile"
                    $isOpen={isMobileMenuOpen}
                >
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                        Início
                    </Link>
                    <a href="/#coffees" onClick={handleAnchorClick}>
                        Cafés
                    </a>
                    <a href="/#how-it-works" onClick={handleAnchorClick}>
                        Como funciona
                    </a>
                </MobileNavigation>
            </HeaderContent>
        </HeaderContainer>
    )
}
