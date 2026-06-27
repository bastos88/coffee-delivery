import styled, { css, keyframes } from "styled-components";

const addToCartPress = keyframes`
  0% {
    transform: scale(1);
  }

  36% {
    transform: scale(0.92);
  }

  68% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.25rem, 1fr));
  gap: 3.75rem 1.5rem;
  width: 100%;

  @media (min-width: 1180px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 3.25rem 1rem;
  }
`;

export const CoffeeCard = styled.article`
  min-height: 22rem;
  border: 1px solid rgba(64, 57, 55, 0.08);
  border-radius: 8px 34px 8px 34px;
  background: ${(props) => props.theme["surface"]};
  box-shadow: 0 8px 22px rgba(64, 57, 55, 0.06);
  transition: transform 220ms ease, box-shadow 220ms ease,
    border-color 220ms ease;

  &:hover {
    transform: translateY(-0.25rem);
    border-color: rgba(196, 127, 23, 0.16);
    box-shadow: 0 14px 30px rgba(64, 57, 55, 0.1);
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 1.25rem 1.25rem;
  text-align: center;

  img {
    width: 8rem;
    height: 8rem;
    object-fit: contain;
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
    filter: drop-shadow(0 1rem 1.1rem rgba(87, 79, 77, 0.16));
    transition: transform 220ms ease, filter 220ms ease;
  }

  ${CoffeeCard}:hover & img {
    transform: translateY(-0.2rem) scale(1.02);
    filter: drop-shadow(0 1.25rem 1.35rem rgba(87, 79, 77, 0.2));
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.35rem;
    min-height: 1.5rem;
    margin-bottom: 0.85rem;
  }

  h4 {
    padding: 0.3rem 0.55rem;
    border: 1px solid rgba(196, 127, 23, 0.08);
    border-radius: 999px;
    color: ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-light"]};
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    line-height: 1;
    text-transform: uppercase;
  }

  p {
    min-height: 1.75rem;
    padding-bottom: 0.45rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1.25;
  }
`;

export const Description = styled.span`
  display: -webkit-box;
  min-height: 2.75rem;
  margin: 0 0.15rem;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: ${(props) => props.theme["base-label"]};
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.55;
`;

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: auto;
  padding-top: 1.25rem;
`;

interface AddToCartButtonProps {
  $isAdded: boolean;
}

export const AddToCartButton = styled.button<AddToCartButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 10px;
  color: ${(props) => props.theme["white"]};
  background: ${(props) =>
    props.$isAdded ? props.theme["purple"] : props.theme["purple-dark"]};
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(75, 41, 149, 0.2);
  transition: transform 200ms cubic-bezier(0.215, 0.61, 0.355, 1),
    background-color 200ms ease, box-shadow 200ms ease, opacity 200ms ease;
  will-change: transform;

  ${(props) =>
    props.$isAdded &&
    css`
      animation: ${addToCartPress} 340ms cubic-bezier(0.215, 0.61, 0.355, 1);
    `}

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background: ${(props) => props.theme["purple"]};
    box-shadow: 0 14px 28px rgba(75, 41, 149, 0.25);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme["purple"]};
    outline-offset: 3px;
  }

  &:active:not(:disabled) {
    transform: scale(0.94);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.58;
    box-shadow: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  justify-self: start;
  color: ${(props) => props.theme["base-text"]};
  font-family: "Baloo 2", cursive;
  line-height: 1;

  span {
    font-size: 1.35rem;
    font-weight: 800;
    white-space: nowrap;
  }
`;
