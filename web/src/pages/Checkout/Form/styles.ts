import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    min-height: 23.25rem;
    background: ${props => props.theme['surface']} ;
    margin-top: 2rem;
    border: 1px solid rgba(64, 57, 55, 0.08);
    border-radius: 12px;
    box-shadow: 0 8px 22px rgba(64, 57, 55, 0.05);
`
export const FormWrapper = styled.div`
    padding: clamp(1.5rem, 4vw, 2.5rem);
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
    background: ${props => props.theme['background']};
    border: 1px solid rgba(64, 57, 55, 0.1);
    border-radius: 8px;
    font-family: "Roboto";
    font-weight: 400;
    padding: 0.75rem;
    font-size: 1rem;
    line-height: 1.4;
    color: ${props => props.theme['base-text']};
    flex: 1;

    &:focus {
      outline: none;
      border-color: ${props => props.theme['yellow']};
      box-shadow: 0 0 0 3px rgba(219, 172, 44, 0.14);
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

  @media (max-width: 640px) {
    .row {
      flex-direction: column;
    }

    .cep,
    .uf {
      max-width: none;
    }
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
    margin-top: 1rem;
  }
`

