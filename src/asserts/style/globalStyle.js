import { createGlobalStyle } from "styled-components";
import background from "../images/bg.png";

const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    line-height: normal;
  }
  
  html, body {
    width: 100%;
    min-height: 100%;
    display:flex;
    padding: 0;
    margin: 0;    
  }

  img {
   max-width: 100%;
  }

  #root {
    background: url(${background});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;    
  }

`;

export default GlobalStyle;
