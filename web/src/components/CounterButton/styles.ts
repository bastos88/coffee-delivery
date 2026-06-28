import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.75rem;
  height: 2.5rem;
  gap: 0.45rem;
  border: 1px solid rgba(87, 79, 77, 0.08);
  border-radius: 10px;
  background: ${(props) => props.theme["base-button"]};
`;

export const Button = styled.button`
  display: grid;
  width: 1.35rem;
  height: 1.35rem;
  place-items: center;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme["purple"]};
  background: transparent;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition: color 180ms ease, background-color 180ms ease,
    transform 180ms ease;

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
    background: rgba(128, 71, 248, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme["purple"]};
    outline-offset: 2px;
  }

  &:active {
    transform: scale(0.94);
  }
`;

export const Count = styled.span`
  min-width: 1rem;
  color: ${(props) => props.theme["base-title"]};
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
`;
