import { createGlobalStyle } from "styled-components";
import background from "../images/bg.png";

import { keyframes } from "styled-components";

const animeKeyFrames = keyframes`
  from {
    opacity: 0.8;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

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
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;

    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;    
  }

  li, ol {
    list-style-type: none;
  }

  .anime {
    animation: ${animeKeyFrames} .3s forwards;   
  }
`;

export default GlobalStyle;
