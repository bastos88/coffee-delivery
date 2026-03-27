import styled from "styled-components";

export const SelectedCoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 28rem;
  margin: 2rem auto 0 auto;
  gap: 1.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 0px 40px 0px 40px;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 12px;
    max-width: 100%;
    margin: 1rem 0 0 0;
  }
`