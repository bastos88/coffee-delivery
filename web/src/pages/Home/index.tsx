import { useEffect, useRef, useState } from "react"
import type { CSSProperties, RefObject } from "react"
import { Coffee, CreditCard, MapPin, Package, ShoppingCart, Timer } from "phosphor-react"
import {
    CoffeeCardContainer,
    HowItWorksSection,
    IntroContainer,
    PremiumCtaSection,
    StepCard,
} from "./styles"
import coffeeIntro from '../../assets/coffee-delivery.png'
import { Card } from "../../components/Card"
import { Link } from "react-router-dom"

const steps = [
    {
        icon: <Coffee size={28} weight="duotone" />,
        title: "Escolha os cafés",
        description: "Explore o menu e selecione os seus cafés favoritos.",
    },
    {
        icon: <ShoppingCart size={28} weight="duotone" />,
        title: "Adicione ao carrinho",
        description: "Defina a quantidade e adicione os itens ao seu pedido.",
    },
    {
        icon: <CreditCard size={28} weight="duotone" />,
        title: "Confirme entrega e pagamento",
        description: "Informe a morada, escolha o método de pagamento e confirme o pedido.",
    },
    {
        icon: <MapPin size={28} weight="duotone" />,
        title: "Receba no Porto",
        description: "Preparamos o pedido e entregamos o café fresquinho até si.",
    },
]

type StepStatus = "idle" | "active" | "completed"

function useInViewOnce(
    targetRef: RefObject<HTMLElement | null>,
    threshold = 0.35,
) {
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const target = targetRef.current

        if (!target || isInView) {
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    observer.disconnect()
                }
            },
            { threshold, rootMargin: "0px 0px -10% 0px" },
        )

        observer.observe(target)

        return () => observer.disconnect()
    }, [isInView, targetRef, threshold])

    return isInView
}

function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    })

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

        const handleChange = () => {
            setPrefersReducedMotion(mediaQuery.matches)
        }

        handleChange()
        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    return prefersReducedMotion
}

export function Home() {
    const howItWorksRef = useRef<HTMLElement | null>(null)
    const hasEnteredView = useInViewOnce(howItWorksRef, 0.35)
    const hasAnimatedStepsRef = useRef(false)
    const prefersReducedMotion = usePrefersReducedMotion()
    const [activeStep, setActiveStep] = useState(-1)
    const [completedStep, setCompletedStep] = useState(-1)
    const [connectionProgress, setConnectionProgress] = useState(0)
    const [isConnectingSteps, setIsConnectingSteps] = useState(false)

    useEffect(() => {
        if (!hasEnteredView || hasAnimatedStepsRef.current) {
            return
        }

        hasAnimatedStepsRef.current = true

        if (prefersReducedMotion) {
            setActiveStep(-1)
            setCompletedStep(steps.length - 1)
            setConnectionProgress(100)
            setIsConnectingSteps(false)
            return
        }

        const timeouts: number[] = []
        const stepDuration = 950
        const activeDuration = 520
        const lastConnectorIndex = steps.length - 1

        steps.forEach((_, index) => {
            const activationDelay = index * stepDuration
            const completionDelay = activationDelay + activeDuration

            timeouts.push(
                window.setTimeout(() => {
                    setActiveStep(index)
                    setIsConnectingSteps(false)
                    setConnectionProgress((index / lastConnectorIndex) * 100)
                }, activationDelay),
            )

            timeouts.push(
                window.setTimeout(() => {
                    setCompletedStep(index)
                    setActiveStep(-1)
                    setIsConnectingSteps(index < steps.length - 1)
                    setConnectionProgress(
                        Math.min(((index + 1) / lastConnectorIndex) * 100, 100),
                    )
                }, completionDelay),
            )
        })

        timeouts.push(
            window.setTimeout(() => {
                setActiveStep(-1)
                setCompletedStep(steps.length - 1)
                setConnectionProgress(100)
                setIsConnectingSteps(false)
            }, steps.length * stepDuration - 180),
        )

        return () => {
            timeouts.forEach((timeout) => window.clearTimeout(timeout))
        }
    }, [hasEnteredView, prefersReducedMotion])

    const getStepStatus = (index: number): StepStatus => {
        if (activeStep === index) {
            return "active"
        }

        if (index <= completedStep) {
            return "completed"
        }

        return "idle"
    }

    return (
        <>
            <IntroContainer id="home">
                <div>
                    <div>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
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
                                    <p>Café chega fresquinho até você</p>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={coffeeIntro} alt="" />
                </div>
            </IntroContainer>
            <HowItWorksSection id="how-it-works" ref={howItWorksRef}>
                <div className="section-heading">
                    <span>Processo simples</span>
                    <h2>Como funciona</h2>
                    <p>O seu café favorito, entregue de forma simples e rápida.</p>
                </div>

                <div
                    className={`steps${isConnectingSteps ? " is-connecting" : ""}`}
                    style={
                        {
                            "--connection-progress": `${connectionProgress}%`,
                            "--connection-width": `${connectionProgress * 0.8}%`,
                            "--connection-mobile-height": `${connectionProgress * 0.78}%`,
                            "--particle-position": `${10 + connectionProgress * 0.8}%`,
                            "--particle-mobile-position": `calc(2rem + ${connectionProgress * 0.78}%)`,
                        } as CSSProperties
                    }
                >
                    <span className="connection-particle" aria-hidden="true" />

                    {steps.map((step, index) => {
                        const status = getStepStatus(index)

                        return (
                        <StepCard
                            key={step.title}
                            $status={status}
                            className={`is-${status}`}
                            data-status={status}
                        >
                            <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                            <div className="step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </StepCard>
                        )
                    })}
                </div>
            </HowItWorksSection>
            <CoffeeCardContainer id="coffees">
                <h1>
                    Nossos cafés
                </h1>
                <Card />
            </CoffeeCardContainer>
            <PremiumCtaSection>
                <div>
                    <div>
                        <span>Entrega premium em Porto</span>
                        <h2>Seu café favorito chega quente, rápido e com o cuidado de cafeteria.</h2>
                        <p>
                            Escolha seus cafés, finalize o pedido e receba uma experiência pensada
                            para transformar qualquer pausa do dia.
                        </p>
                        <nav>
                            <a href="#coffees">Ver cafés</a>
                            <Link to="/checkout">Finalizar pedido</Link>
                        </nav>
                    </div>
                    <img src="/imgs/delivery.png" alt="Entregador levando café em uma scooter" />
                </div>
            </PremiumCtaSection>
        </>
    )
}
