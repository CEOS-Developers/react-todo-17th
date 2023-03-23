import { createGlobalStyle } from 'styled-components';
import bgImage from '../images/bonobono.jpg';
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
    font-family: 'KCC-Ganpan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
body{
    background-image: url(${bgImage});
    background-size: cover;
    width:100vw;
    height:100vh;
    display : flex;
    align-items: center;
    justify-content: center;
    user-select : none;
}
`;

export default GlobalStyle;