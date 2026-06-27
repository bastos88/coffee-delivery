import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const cartBounce = keyframes`
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
  }

  28% {
    transform: translateY(-3px) rotate(-6deg) scale(1.04);
  }

  58% {
    transform: translateY(1px) rotate(5deg) scale(1);
  }

  100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
`;

const badgePop = keyframes`
  0% {
    transform: scale(1);
  }

  45% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 1rem;
  z-index: 20;
  width: 100%;
  padding: 0 1rem;
`;

export const HeaderContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  width: min(100%, 77.5rem);
  min-height: 4.5rem;
  margin: 0 auto;
  padding: 0.625rem 0.75rem 0.625rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: #4a257a;
  box-shadow: 0 14px 32px rgba(64, 57, 55, 0.16);

  > a:first-child {
    display: inline-flex;
    align-items: center;
    min-height: 2.75rem;
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.92);
    transition: transform 200ms ease, opacity 200ms ease, box-shadow 200ms ease;

    img {
      display: block;
      width: clamp(2.875rem, 6.5vw, 4.75rem);
      height: auto;
      object-fit: contain;
    }

    &:hover {
      transform: translateY(-1px);
      opacity: 0.96;
    }

    &:focus-visible {
      outline: 2px solid ${(props) => props.theme["yellow"]};
      outline-offset: 4px;
    }
  }

  @media (max-width: 980px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
    min-height: 4rem;
    padding: 0.5rem 0.625rem 0.5rem 0.75rem;
  }

  @media (max-width: 768px) {
    > a:first-child img {
      width: 6.55rem;
    }
  }

  @media (max-width: 520px) {
    > a:first-child {
      padding: 0.3rem 0.55rem;

      img {
        width: 5.9rem;
      }
    }
  }
`;

export const NavigationLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  a {
    display: inline-flex;
    align-items: center;
    min-height: 2.5rem;
    padding: 0 1rem;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.84);
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    transition: background-color 200ms ease, color 200ms ease,
      transform 200ms ease;

    &.active {
      color: ${(props) => props.theme["base-subtitle"]};
      background: ${(props) => props.theme["section-beige"]};
    }

    &:hover {
      transform: translateY(-1px);
      color: ${(props) => props.theme["white"]};
      background: rgba(255, 255, 255, 0.12);
    }

    &.active:hover {
      color: ${(props) => props.theme["base-subtitle"]};
      background: ${(props) => props.theme["section-beige"]};
    }

    &:focus-visible {
      outline: 2px solid ${(props) => props.theme["yellow"]};
      outline-offset: 3px;
    }
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.625rem;
`;

interface CartAnimationProps {
  $shouldAnimateCart: boolean;
}

export const CartIconButton = styled(Link)<CartAnimationProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};
  box-shadow: 0 8px 24px rgba(196, 127, 23, 0.18);
  transition: transform 200ms ease, background-color 200ms ease,
    box-shadow 200ms ease;
  will-change: transform;

  ${(props) =>
    props.$shouldAnimateCart &&
    css`
      animation: ${cartBounce} 420ms cubic-bezier(0.215, 0.61, 0.355, 1);
    `}

  &:hover {
    transform: translateY(-2px);
    background: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme["base-title"]};
    box-shadow: 0 12px 28px rgba(196, 127, 23, 0.24);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme["yellow"]};
    outline-offset: 3px;
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 520px) {
    width: 2.65rem;
    height: 2.65rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
`;

export const LocationBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 2.75rem;
  padding: 0 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  color: ${(props) => props.theme["purple-dark"]};
  background: rgba(244, 237, 229, 0.96);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  transition: transform 200ms ease, background-color 200ms ease,
    box-shadow 200ms ease;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    transform: translateY(-1px);
    background: ${(props) => props.theme["white"]};
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  color: ${(props) => props.theme["white"]};
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background-color 200ms ease, transform 200ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.16);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme["yellow"]};
    outline-offset: 3px;
  }

  @media (max-width: 980px) {
    display: inline-flex;
  }

  @media (max-width: 520px) {
    width: 2.65rem;
    height: 2.65rem;
  }
`;

interface MobileNavigationProps {
  $isOpen: boolean;
}

export const MobileNavigation = styled.nav<MobileNavigationProps>`
  position: absolute;
  top: calc(100% + 0.625rem);
  right: 0;
  left: 0;
  display: none;
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  background: #4a257a;
  box-shadow: 0 18px 36px rgba(64, 57, 55, 0.16);
  opacity: 0;
  transform: translateY(-0.5rem) scale(0.98);
  pointer-events: none;
  transition: opacity 220ms ease, transform 220ms ease;

  a {
    display: flex;
    align-items: center;
    min-height: 2.75rem;
    padding: 0 1rem;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 700;
    text-decoration: none;

    &:hover,
    &:focus-visible {
      color: ${(props) => props.theme["base-subtitle"]};
      background: ${(props) => props.theme["section-beige"]};
      outline: none;
    }
  }

  ${(props) =>
    props.$isOpen &&
    css`
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    `}

  @media (max-width: 980px) {
    display: grid;
    gap: 0.25rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
  }
`;

export const CartBadge = styled.span<CartAnimationProps>`
  position: absolute;
  top: -0.45rem;
  right: -0.45rem;
  display: grid;
  min-width: 1.35rem;
  height: 1.35rem;
  place-items: center;
  padding: 0 0.25rem;
  border: 2px solid #4a257a;
  border-radius: 999px;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["purple-dark"]};
  font-size: 0.75rem;
  font-weight: 700;
  transform-origin: center;
  will-change: transform;

  ${(props) =>
    props.$shouldAnimateCart &&
    css`
      animation: ${badgePop} 360ms cubic-bezier(0.215, 0.61, 0.355, 1);
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
