import { CardContainer, CartContent, CoffeeCard, ContentCard, Description, Price } from "./styles";

import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { CounterButton } from "../CounterButton";

export function Card() {
    const { transactions, addToCart } = useContext(TransactionsContext);
    const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

    const increment = (id: number) => {
        setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const decrement = (id: number) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 0) - 1, 0)
        }));
    };

    const handleAddClick = (transaction: any, count: number) => {
        if (!count || count <= 0) return;

        try {
            const imgEl = document.getElementById(`product-image-${transaction.id}`) as HTMLImageElement | null;
            const cartEl = document.getElementById('cart-target') as HTMLElement | null;
            const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (imgEl && cartEl && !prefersReducedMotion) {
                const imgRect = imgEl.getBoundingClientRect();
                const cartRect = cartEl.getBoundingClientRect();

                const clone = imgEl.cloneNode(true) as HTMLImageElement;
                clone.style.position = 'fixed';
                clone.style.left = `${imgRect.left}px`;
                clone.style.top = `${imgRect.top}px`;
                clone.style.width = `${imgRect.width}px`;
                clone.style.height = `${imgRect.height}px`;
                clone.style.transition = 'transform 700ms cubic-bezier(.36,.07,.19,.97), opacity 700ms';
                clone.style.zIndex = '9999';
                clone.style.pointerEvents = 'none';
                clone.style.borderRadius = '8px';
                clone.style.willChange = 'transform, opacity';
                document.body.appendChild(clone);
                console.log('clone appended for product', transaction.id);

                const startX = imgRect.left + imgRect.width / 2;
                const startY = imgRect.top + imgRect.height / 2;
                const endX = cartRect.left + cartRect.width / 2;
                const endY = cartRect.top + cartRect.height / 2;
                const dx = endX - startX;
                const dy = endY - startY;
                const scale = Math.min(0.25, (cartRect.width / imgRect.width));

                // run animation on next frame
                requestAnimationFrame(() => {
                    clone.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
                    clone.style.opacity = '0.6';
                });

                const cleanup = () => {
                    if (clone && clone.parentNode) clone.parentNode.removeChild(clone);
                };

                clone.addEventListener('transitionend', cleanup, { once: true });
            }
        } catch (e) {
            // fail silently — animation is cosmetic
            console.error('Erro na animação de adicionar ao carrinho:', e);
        }

        addToCart(transaction.id, count);
    };
    return (
        <CardContainer>
            {transactions.map(transaction => {
                const count = quantities[transaction.id] || 0;
                return (
                    <CoffeeCard key={transaction.id}>
                        <ContentCard>
                                    <img id={`product-image-${transaction.id}`} src={transaction.image} alt={transaction.description} />
                            <h4>{transaction.description}</h4>
                            <p>{transaction.category}</p>
                            <Description>{transaction.text}</Description>
                            <CartContent>
                                <Price>
                                    <span>R$</span>
                                    <span>{transaction.price}</span>
                                </Price>
                                <CounterButton
                                    count={quantities[transaction.id] || 0}
                                    onIncrement={() => increment(transaction.id)}
                                    onDecrement={() => decrement(transaction.id)}
                                />
                                <span
                                    className="icon-wrapper"
                                    onClick={() => handleAddClick(transaction, count)}>
                                    <ShoppingCart size={22} weight="fill" />
                                </span>
                            </CartContent>
                        </ContentCard>
                    </CoffeeCard>
                )
            }
            )}
        </CardContainer>
    )
}
// <p>Total: R$ {total.toFixed(2)}</p>//