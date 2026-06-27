import styled from "styled-components";

export const CheckOutContainer = styled.section`
  width: min(100% - 2rem, 75rem);
  margin: 4rem auto;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.85fr);
  gap: 2.25rem;
  min-height: 40rem;

  h1 {
    font-family: "baloo 2";
    font-weight: bold;
    font-size: 20px;  
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 640px) {
    width: min(100% - 1.25rem, 75rem);
    margin: 2.5rem auto;
    gap: 2rem;
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 0.875rem;
  margin-top: 1rem;
  background: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};
  font-family: "Roboto";
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 200ms ease, background-color 200ms ease,
    box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(196, 127, 23, 0.18);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme["yellow-dark"]};
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const FeedbackModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(39, 34, 33, 0.34);
  backdrop-filter: blur(4px);
`

interface FeedbackModalProps {
  $type: "success" | "error";
}

export const FeedbackModal = styled.div<FeedbackModalProps>`
  width: min(100%, 26rem);
  padding: 2rem;
  border: 1px solid rgba(64, 57, 55, 0.08);
  border-radius: 16px;
  background: ${(props) => props.theme["surface"]};
  box-shadow: 0 24px 70px rgba(39, 34, 33, 0.22);
  text-align: center;

  > span {
    display: grid;
    width: 3rem;
    height: 3rem;
    place-items: center;
    margin: 0 auto 1rem;
    border-radius: 999px;
    color: ${(props) => props.theme["white"]};
    background: ${(props) =>
      props.$type === "success"
        ? props.theme["purple"]
        : props.theme["yellow-dark"]};
    font-size: 1.5rem;
    font-weight: 800;
  }

  h2 {
    margin-bottom: 0.75rem;
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2", cursive;
    font-size: 1.75rem;
    line-height: 1.1;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.95rem;
    line-height: 1.6;
  }

  button {
    min-height: 2.75rem;
    margin-top: 1.5rem;
    padding: 0 1.25rem;
    border: 0;
    border-radius: 8px;
    color: ${(props) => props.theme["white"]};
    background: ${(props) =>
      props.$type === "success"
        ? props.theme["purple-dark"]
        : props.theme["yellow-dark"]};
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 200ms ease, box-shadow 200ms ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(64, 57, 55, 0.14);
    }

    &:focus-visible {
      outline: 2px solid ${(props) => props.theme["purple"]};
      outline-offset: 3px;
    }
  }
`
