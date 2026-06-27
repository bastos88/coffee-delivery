import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
}

html {
    scroll-behavior: smooth;
}

body {
    background-color:${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
}

body,input,textarea,button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing:antialiased;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

img {
    max-width: 100%;
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
}
`
