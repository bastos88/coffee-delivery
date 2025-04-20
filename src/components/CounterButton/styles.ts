import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 2.475rem;
  background: ${(props) => props.theme['base-button']};
  gap: 0.5rem;
  border-radius: 6px;
`;
export const Button = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${(props) => props.theme['purple']};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Count = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #222;
`;