import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body{
        background-color: rgb(252, 241, 240);
        font-family: 'GmarketSansMedium';
    }
`;

export {GlobalStyle};