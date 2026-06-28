import styled from "styled-components";

export const PaymentContainer = styled.div`
  width: 100%;
  min-height: 13rem;
  margin-top: 2rem;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border: 1px solid rgba(64, 57, 55, 0.08);
  border-radius: 12px;
  background: ${(props) => props.theme["surface"]};
  box-shadow: 0 8px 22px rgba(64, 57, 55, 0.05);
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  p {
    margin: 0;
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto";
    font-size: 1.125rem;
    font-weight: 500;
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.875rem;
  margin-top: 2rem;

  label {
    position: relative;
    min-height: 6.75rem;
    border: 1px solid rgba(64, 57, 55, 0.08);
    border-radius: 12px;
    background: ${(props) => props.theme["surface"]};
    cursor: pointer;
    box-shadow: 0 8px 18px rgba(64, 57, 55, 0.04);
    transition: transform 200ms ease, border-color 200ms ease,
      background-color 200ms ease, box-shadow 200ms ease;

    &[data-featured="true"] {
      border-color: rgba(128, 71, 248, 0.18);
      background: linear-gradient(
        135deg,
        rgba(235, 229, 249, 0.62) 0%,
        ${(props) => props.theme["surface"]} 72%
      );
    }

    &.active {
      border-color: ${(props) => props.theme["purple"]};
      background: ${(props) => props.theme["purple-light"]};
      box-shadow: 0 12px 28px rgba(128, 71, 248, 0.12);
    }

    &:hover {
      transform: translateY(-2px);
      border-color: rgba(128, 71, 248, 0.28);
      box-shadow: 0 12px 26px rgba(64, 57, 55, 0.08);
    }

    &:focus-within {
      outline: 2px solid ${(props) => props.theme["purple"]};
      outline-offset: 3px;
    }

    input {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const PaymentOptionContent = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.875rem;
  align-items: flex-start;
  min-height: 100%;
  padding: 1rem;

  .payment-icon {
    display: grid;
    width: 2.75rem;
    height: 2.75rem;
    place-items: center;
    border-radius: 10px;
    color: ${(props) => props.theme["purple"]};
    background: ${(props) => props.theme["purple-light"]};
  }

  .payment-copy {
    min-width: 0;

    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      align-items: center;
      margin-bottom: 0.35rem;
    }

    strong {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 0.9rem;
      font-weight: 700;
      line-height: 1.25;
    }

    span {
      padding: 0.2rem 0.45rem;
      border-radius: 999px;
      color: ${(props) => props.theme["yellow-dark"]};
      background: ${(props) => props.theme["yellow-light"]};
      font-size: 0.65rem;
      font-weight: 700;
      line-height: 1;
      white-space: nowrap;
    }

    p {
      margin: 0;
      color: ${(props) => props.theme["base-label"]};
      font-size: 0.78rem;
      font-weight: 400;
      line-height: 1.45;
    }
  }

  .payment-check {
    color: ${(props) => props.theme["purple"]};
    opacity: 0;
    transform: scale(0.82);
    transition: opacity 200ms ease, transform 200ms ease;
  }

  label.active & {
    .payment-icon {
      color: ${(props) => props.theme["white"]};
      background: ${(props) => props.theme["purple"]};
    }

    .payment-check {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 640px) {
    min-height: 5.75rem;
  }
`;

export const PaymentDetailsPanel = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid rgba(128, 71, 248, 0.12);
  border-radius: 12px;
  background: rgba(235, 229, 249, 0.34);

  > div:first-child {
    display: grid;
    gap: 0.25rem;

    strong {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 0.95rem;
      font-weight: 700;
      line-height: 1.3;
    }

    span {
      color: ${(props) => props.theme["base-label"]};
      font-size: 0.8rem;
      line-height: 1.45;
    }
  }

  label {
    display: grid;
    gap: 0.45rem;
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.82rem;
    font-weight: 600;
  }

  input {
    min-height: 2.75rem;
    width: 100%;
    border: 1px solid rgba(64, 57, 55, 0.1);
    border-radius: 8px;
    background: ${(props) => props.theme["surface"]};
    color: ${(props) => props.theme["base-text"]};
    font: inherit;
    font-weight: 400;
    padding: 0 0.875rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme["purple"]};
      box-shadow: 0 0 0 3px rgba(128, 71, 248, 0.12);
    }
  }

  .payment-details-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(8rem, 0.5fr);
    gap: 0.75rem;
  }

  @media (max-width: 640px) {
    .payment-details-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const PaymentNotice = styled.p`
  margin: 1rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(64, 57, 55, 0.08);
  color: ${(props) => props.theme["base-label"]};
  font-size: 0.8rem;
  line-height: 1.45;
`;
