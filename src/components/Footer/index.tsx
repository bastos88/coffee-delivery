import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <div>© {new Date().getFullYear()} Coffee Delivery — Feito com ☕</div>
    </FooterContainer>
  );
}

export default Footer;