import styled from "styled-components";

export const CartSummaryCard = styled.div`
  width: 100%;
  max-width: 28rem;
  margin-top: 2rem;
  padding: 2rem;
  border: 1px solid rgba(64, 57, 55, 0.08);
  border-radius: 8px 36px 8px 36px;
  background-color: ${(props) => props.theme["surface"]};
  box-shadow: 0 8px 22px rgba(64, 57, 55, 0.05);

  @media (max-width: 980px) {
    max-width: none;
  }

  @media (max-width: 640px) {
    padding: 1.25rem;
  }
`;

export const ScrollableCoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 23.5rem;
  overflow-y: auto;
  padding-right: 0.5rem;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: rgba(87, 79, 77, 0.28) transparent;

  &::-webkit-scrollbar {
    width: 0.45rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgba(87, 79, 77, 0.22);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(87, 79, 77, 0.34);
  }

  @media (max-width: 640px) {
    max-height: 20rem;
    padding-right: 0.35rem;
  }
`;

export const EmptyCartMessage = styled.p`
  padding: 1.5rem 0;
  color: ${(props) => props.theme["base-label"]};
  font-size: 0.9rem;
  line-height: 1.5;
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(64, 57, 55, 0.1);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  span {
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
    line-height: 1.4;
  }

  strong {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 0.95rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .order-total {
    align-items: baseline;

    span {
      color: ${(props) => props.theme["base-text"]};
      font-size: 1rem;
      font-weight: 600;
    }

    strong {
      color: ${(props) => props.theme["base-title"]};
      font-family: "Baloo 2", cursive;
      font-size: clamp(1.45rem, 3vw, 1.75rem);
      font-weight: 800;
      line-height: 1;
    }
  }
`;
