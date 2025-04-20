import styled from "styled-components";

export const SelectedCoffeeList = styled.div`
  display: flex;
  flex-direction: column;  // muda para coluna
  width: 100%;
  height: 31.125rem;
  margin-top: 2rem;
  gap: 1.5rem; // espaçamento entre os itens
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 0px 40px 0px 40px;
  padding: 2rem;

`