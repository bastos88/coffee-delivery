import styled from "styled-components";

export const IntroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5.75rem 0;
    align-items: center;
 
    h1 {
        font-size: 3rem;
        font-family: "baloo 2";
        font-weight: bold;
        line-height: 1.3;
        margin-bottom: 2rem;
    }
    span {
    font-size: 20px;
    font-family: "roboto";
    font-weight: lighter;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
 
        padding: 0;
        list-style: none;
        margin-top: 50px;
        align-items: center;
    }
        
    li {
        display: flex;
        align-items: center;
        width: 45%;
        margin-top: 1rem;
       
    }
    .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem; /* Tamanho do círculo */
        height: 2rem;
        margin-right: 0.75rem;
        color: ${(props) => props.theme['white']};
        border-radius: 9999px;
    }

    li:nth-child(1) .icon-wrapper {
        background-color:${(props) => props.theme['yellow-dark']};
    }

    li:nth-child(2) .icon-wrapper {
        background-color: ${(props) => props.theme['base-text']};
    }

    li:nth-child(3) .icon-wrapper {
        background-color: ${(props) => props.theme['yellow']};
    }

    li:nth-child(4) .icon-wrapper {
        background-color: ${(props) => props.theme['purple']};
    }

    .icon-wrapper svg {
        width: 1rem;
        height: 1rem;
    }
    ul li p {
        font-family: "baloo 2";
        font-weight: lighter;
        line-height: 1.6;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        h1 { font-size: 2rem; }
        span { font-size: 0.95rem; }
        img { max-width: 100%; height: auto; margin-top: 1rem; }
        ul { justify-content: center; }
        li { width: 100%; justify-content: flex-start; }
    }

`

export const CoffeeCardContainer = styled.div`
    display: flex;
    margin: 2rem 0;
    background-color: ${(props) => props.theme['background']};
    position: relative;
    h1 {
        display: flex;
        position: absolute;
        font-family: "baloo 2";
        font-weight: bolder;
        font-size: 32px;  
    }

    @media (max-width: 768px) {
        flex-direction: column;
        h1 { position: static; margin-bottom: 1rem; }
    }

    @media (max-width: 768px) {
        ul { flex-direction: column; }
        li { width: 100%; }
        h1 { font-size: 1.8rem; }
    }
`