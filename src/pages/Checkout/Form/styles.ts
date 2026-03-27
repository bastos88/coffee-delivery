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

  input {
    background: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 4px;
    font-family: "Roboto";
    font-weight: 400;
    padding: 0.75rem;
    font-size: 0.875rem;
    color: ${props => props.theme['base-label']};
    flex: 1;
}
.cep {
    max-width: 200px;
  }

  .full {
    width: 100%;
  }

  .row {
    display: flex;
    gap: 0.75rem;
  }

  .uf {
    max-width: 60px;
  }

  .complemento-wrapper {
    position: relative;
    flex: 1;

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
`

