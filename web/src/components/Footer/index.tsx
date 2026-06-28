import { ArrowRight, ArrowUp, Coffee, MapPin, ShoppingBag } from "phosphor-react";
import { Link } from "react-router-dom";
import {
  FooterAction,
  FooterBottom,
  FooterBrand,
  FooterContainer,
  FooterContent,
  FooterCta,
  FooterGrid,
  FooterInfo,
  FooterLinks,
  FooterLocation,
  ScrollTopButton,
} from "./styles";

export function Footer() {
  const currentYear = new Date().getFullYear();

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <FooterContainer>
      <div className="footer-glow footer-glow-left" aria-hidden="true" />
      <div className="footer-glow footer-glow-right" aria-hidden="true" />

      <FooterContent>
        <FooterCta>
          <div>
            <span className="eyebrow">
              <Coffee size={18} weight="fill" />
              Coffee Delivery Porto
            </span>

            <h2>O seu próximo café está a poucos cliques.</h2>

            <p>
              Escolha os seus favoritos, faça o pedido e receba uma experiência
              de cafeteria onde estiver.
            </p>
          </div>

          <FooterAction to="/checkout">
            Fazer pedido
            <ArrowRight size={20} weight="bold" />
          </FooterAction>
        </FooterCta>

        <FooterGrid>
          <FooterBrand>
            <a href="#home" className="brand-logo" aria-label="Voltar ao início">
              <span className="brand-icon">
                <Coffee size={24} weight="fill" />
              </span>

              <strong>
                Coffee
                <span>Delivery</span>
              </strong>
            </a>

            <p>
              Cafés selecionados, entrega local e uma experiência pensada para
              tornar qualquer pausa do dia mais especial.
            </p>

            <FooterLocation>
              <MapPin size={20} weight="fill" />
              <span>Entrega disponível no Porto, Portugal</span>
            </FooterLocation>
          </FooterBrand>

          <FooterLinks>
            <strong>Explorar</strong>

            <a href="#home">Início</a>
            <a href="#how-it-works">Como funciona</a>
            <a href="#coffees">Nossos cafés</a>
            <Link to="/checkout">Finalizar pedido</Link>
          </FooterLinks>

          <FooterInfo>
            <strong>Pedido rápido</strong>

            <div>
              <span className="info-icon">
                <ShoppingBag size={20} weight="fill" />
              </span>

              <p>
                Adicione os seus cafés favoritos ao carrinho e conclua o pedido
                em poucos passos.
              </p>
            </div>

            <Link to="/checkout">
              Ir para o checkout
              <ArrowRight size={16} weight="bold" />
            </Link>
          </FooterInfo>
        </FooterGrid>

        <FooterBottom>
          <p>
            © {currentYear} Coffee Delivery. Feito para quem não abre mão de um
            bom café.
          </p>

          <div>
            <a href="#home">Privacidade</a>
            <a href="#home">Termos</a>

            <ScrollTopButton
              type="button"
              onClick={handleScrollToTop}
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={18} weight="bold" />
            </ScrollTopButton>
          </div>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}