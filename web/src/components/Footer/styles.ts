import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  padding: clamp(4rem, 8vw, 7rem) 1.5rem 1.5rem;
  background:
    radial-gradient(circle at 8% 0%, rgba(219, 172, 44, 0.16), transparent 24rem),
    radial-gradient(circle at 92% 100%, rgba(128, 71, 248, 0.07), transparent 28rem),
    linear-gradient(180deg, #fafafa 0%, #f3f2f2 100%);
  color: #403937;

  .footer-glow {
    position: absolute;
    width: 24rem;
    height: 24rem;
    border-radius: 50%;
    filter: blur(110px);
    pointer-events: none;
    opacity: 0.16;
  }

  .footer-glow-left {
    top: -13rem;
    left: -10rem;
    background: #dbac2c;
  }

  .footer-glow-right {
    right: -11rem;
    bottom: -16rem;
    background: #8047f8;
  }
`;

export const FooterContent = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 1120px);
  margin: 0 auto;
`;

export const FooterCta = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: clamp(3rem, 6vw, 5rem);
  border: 1px solid #e6e5e5;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 18px 45px rgba(64, 57, 55, 0.08);
  backdrop-filter: blur(16px);

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    margin-bottom: 0.9rem;
    color: #c47f17;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 620px;
    margin: 0;
    color: #272221;
    font-size: clamp(1.65rem, 3vw, 2.5rem);
    line-height: 1.15;
  }

  p {
    max-width: 620px;
    margin: 0.9rem 0 0;
    color: #574f4d;
    line-height: 1.65;
  }

  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const FooterAction = styled(Link)`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.65rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  background: #dbac2c;
  color: #272221;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: #c47f17;
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(219, 172, 44, 0.28);
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(140px, 0.7fr) minmax(220px, 0.9fr);
  gap: clamp(2rem, 6vw, 5rem);
  padding-bottom: 3rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBrand = styled.div`
  .brand-logo {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    color: #272221;
    text-decoration: none;
  }

  .brand-icon {
    display: grid;
    width: 2.8rem;
    height: 2.8rem;
    place-items: center;
    border-radius: 12px;
    background: linear-gradient(135deg, #dbac2c, #f6c35e);
    color: #272221;
    box-shadow: 0 10px 25px rgba(219, 172, 44, 0.2);
  }

  strong {
    display: flex;
    flex-direction: column;
    font-size: 1.15rem;
    line-height: 1;
  }

  strong span {
    margin-top: 0.22rem;
    color: #c47f17;
    font-size: 0.75rem;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  > p {
    max-width: 380px;
    margin: 1.4rem 0;
    color: #574f4d;
    line-height: 1.7;
  }
`;

export const FooterLocation = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: #574f4d;
  font-size: 0.9rem;

  svg {
    color: #c47f17;
  }
`;

export const FooterLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.85rem;

  strong {
    margin-bottom: 0.45rem;
    color: #c47f17;
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  a {
    color: #574f4d;
    text-decoration: none;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: #8047f8;
      transform: translateX(4px);
    }
  }
`;

export const FooterInfo = styled.div`
  padding: 1.35rem;
  border: 1px solid #e6e5e5;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 12px 28px rgba(64, 57, 55, 0.04);

  > strong {
    display: block;
    margin-bottom: 1rem;
    color: #c47f17;
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  > div {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
  }

  p {
    margin: 0;
    color: #574f4d;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  > a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: 1.2rem;
    color: #8047f8;
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      color: #5f32c8;
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #dedbd9;

  p {
    margin: 0;
    color: #8d8686;
    font-size: 0.82rem;
    line-height: 1.5;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    color: #8d8686;
    font-size: 0.8rem;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #8047f8;
    }
  }

  @media (max-width: 620px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const ScrollTopButton = styled.button`
  display: grid;
  width: 2.35rem;
  height: 2.35rem;
  place-items: center;
  border: 1px solid #dedbd9;
  border-radius: 10px;
  background: #ffffff;
  color: #8047f8;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    background: #8047f8;
    color: #ffffff;
    transform: translateY(-3px);
  }
`;