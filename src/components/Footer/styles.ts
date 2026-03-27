import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 1px solid ${props => props.theme["base-button"]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme["base-text"]};
  background: transparent;
  font-size: 0.9rem;

  a { color: ${props => props.theme["purple"]}; text-decoration: none; }

  @media (max-width: 768px) {
    padding: 1rem 0;
    font-size: 0.85rem;
  }
`;
