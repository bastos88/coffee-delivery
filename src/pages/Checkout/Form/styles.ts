import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    max-width: 44rem;
    background: ${props => props.theme['base-card']} ;
    margin-top: 2rem;
    border-radius: 6px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      margin-top: 1rem;
    }
`
export const FormWrapper = styled.div`
    padding: 40px;

    @media (max-width: 480px) {
      padding: 16px;
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
export const AddressForm = styled.form`
display: flex;
flex-direction: column;
margin-top: 2rem;
gap: 1rem;

  /* screen-reader only helper to keep visual layout while providing labels */
  .sr-only {
    position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }

  input {
    background: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 4px;
    font-family: "Roboto";
    font-weight: 400;
    padding: 0.75rem;
    font-size: 1rem;
    line-height: 1.4;
    color: ${props => props.theme['base-text']};
    flex: 1;
    min-width: 0;
    transition: box-shadow 0.15s, border-color 0.15s;

    &::placeholder {
      color: ${props => props.theme['base-label']};
      opacity: 1;
    }

    &:focus-visible {
      outline: 2px solid ${props => props.theme['yellow-dark']};
      box-shadow: 0 0 0 3px rgba(196,127,23,0.12);
      border-color: ${props => props.theme['yellow-dark']};
    }
  }
.cep {
    width: clamp(60px, 20%, 200px);
    max-width: 200px;
    flex: 0 0 auto;
    box-sizing: border-box;
  }

  .full {
    width: 100%;
  }

  .row {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .uf {
    width: 60px;
    max-width: 60px;
    flex: 0 0 60px;
  }

  .complemento-wrapper {
    position: relative;
    flex: 1;
    min-width: 0;

    input {
      width: 100%;
    }

    .optional {
      position: absolute;
      top: 50%;
      right: 0.75rem;
      transform: translateY(-50%);
      font-size: 0.75rem;
      font-style: italic;
      color: ${props => props.theme['base-label']};
    }
  }

  @media (max-width: 480px) {
    .row { flex-direction: column; align-items: stretch; gap: 0.5rem; }
    .cep { width: 60px; max-width: 60px; flex: 0 0 60px; }
    .uf { width: 60px; max-width: 60px; flex: 0 0 60px; }
    input:not(.cep):not(.uf) { width: 100%; }
    input { font-size: 1rem; }
  }
`

