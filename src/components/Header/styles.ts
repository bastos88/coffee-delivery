import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;

    nav {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        
        a {
            display: flex;
            align-items: center;
            text-decoration: none;
        }
  
    }
    nav a:first-child {
            padding: 0.5rem 0.75rem;
            background: ${(props) => props.theme['purple-light']};
            color: ${(props) => props.theme['purple-dark']};
            font-size: 0.875rem;
            font-weight: lighter;
            border-radius: 6px;
        }
    nav a:last-child {
        padding: 0.4rem;
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        border-radius: 6px;

    }
   nav a:first-child svg{
        color: ${(props) => props.theme['purple']};
        margin-left: 0.5rem;
   }
    nav a:last-child svg{
        margin-left: 0.25rem;
    }

    @media (max-width: 768px) {
        margin: 1rem 0;
        nav {
            gap: 0.5rem;
        }
    }
`
