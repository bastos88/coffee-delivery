import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 2rem 10rem;

    nav {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 0.75rem;
        
        a {
        display: flex;
        align-items: center;
        text-decoration: none;
        
        }
  
    }
    nav a:first-child {
            width: 8.938rem;
            height: 2.375rem;
            background: ${(props) => props.theme['purple-light']};
            color: ${(props) => props.theme['purple-dark']};
            font-size: 0.875rem;
            line-height: 0.5;
            font-weight: lighter;
            border-radius: 6px;
        }
    nav a:last-child {
        width:2.375rem;
        height: 2.375rem;
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        border-radius: 6px;

    }
   nav a:first-child svg{
        color: ${(props) => props.theme['purple']};
        margin-left: 10px;
   }
    nav a:last-child svg{
        margin-left: 7px;
    }
    
`
