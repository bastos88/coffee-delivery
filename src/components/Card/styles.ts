import styled from "styled-components";

export const CardContainer = styled.div`
    margin: 5rem 0rem;
    padding-top: 34px;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
`

export const CoffeeCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 256px;
    min-height: 310px;
    gap: 20px;
    background-color: ${(props) => props.theme['base-card']};
    border-radius:0px 40px 0px 40px;

`
export const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: -3rem 0;
    justify-content: center;
    text-align: center;
    padding: 1.25rem;
    padding-bottom: 60px;

    img {
    width: 7.5rem;
    margin: 0 auto;
    }

    h4 {
        padding: 6px 6px;
        font-size: 10px;
        margin: 0 auto;
        margin-top: 12px;
        margin-bottom: 16px;
        border-radius: 10px;
        color: ${(props) => props.theme['yellow-dark']};
        background-color: ${(props) => props.theme['yellow-light']};
        
    }
    p {
        font-size: 20px;
        font-family: "baloo 2";
        line-height: 1.3;
        font-weight: bold;
        padding-bottom: 8px;
    }

`
export const Description = styled.span`
       display: -webkit-box;
      -webkit-line-clamp: 2; // número de linhas
      -webkit-box-orient: vertical;
      font-size: 14px;
      margin: 0 0.075rem;
      font-family: 'Roboto';
      line-height: 1.3;
      font-weight: lighter;
      color: ${(props) => props.theme['base-label']};

        
`

export const CartContent = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 25px;
    
    label {
        margin-right: 20px;
    }

    .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.375rem; /* Tamanho do círculo */
        height:2.375rem;
        margin-right: 0.75rem;
        border-radius: 6px;
        cursor: pointer;
        color: ${(props) => props.theme['white']};
        background-color: ${(props) => props.theme['purple-dark']};
    }

`



export const Price = styled.div`
  display: flex;
  align-items: baseline;
  font-family: "baloo 2";
  line-height: 1.3;
  margin: 0px 20px 0px 20px;
  gap: 2px;

  span:first-child {
    font-size: 14px;
    font-weight: 100;
    color: ${(props) => props.theme['base-text']};
  }

  span:last-child {
    font-size: 20px;
    font-weight: bolder;
    color: ${(props) => props.theme['base-text']};

  }
`


