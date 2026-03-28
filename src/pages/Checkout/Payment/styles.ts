import styled from "styled-components";

export const PaymentContainer = styled.div`
  width: 100%;
  max-width: 44rem;
  min-height: 13rem;
  background: ${props => props.theme['base-card']} ;
  margin-top: 2rem;
  border-radius: 6px;
  padding: 40px;
  @media (max-width: 480px) {
    padding: 16px;
    margin-top: 1rem;
    min-height: 10rem;
  }
    p {
    font-family: "Roboto";
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0;
    color: ${props => props.theme['base-subtitle']} ;
  }
  span {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']} ;

  }

`
export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

  p {
    font-family: "Roboto";
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0;
    color: ${props => props.theme['base-subtitle']} ;
  }
  span {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']} ;

  }
`

export const PaymentOptions = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 0.75rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  label {
    flex: 1;
    min-width: 0;
    background:${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};
    padding: 1rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 400;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.2s;
    &.active {
      background: #ebe5f9;
      border: 1px solid #8047f8;
    }

    /* keep inputs accessible but visually hidden so keyboard/AT can reach them */
    input {
      position: absolute;
      opacity: 0;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      overflow: hidden;
      white-space: nowrap;
    }

    &:has(input:checked) {
      background: #ebe5f9;
      border: 1px solid #8047f8;
    }

    /* show focus ring when the internal input is focused */
    &:focus-within {
      box-shadow: 0 0 0 3px rgba(128,71,248,0.12);
      border-color: #8047f8;
    }

    svg {
      color: #8047f8;
    }
  }
`;
