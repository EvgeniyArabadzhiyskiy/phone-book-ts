import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    ul{
    margin: 0;
    padding: 0;
    list-style: none;
    }
    h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    padding: 0;
    list-style: none;
    }
    a{
    text-decoration: none;
    color: inherit
    }
    img{
        display: block;
        width: 100%;
        height: auto;
    }
`;
