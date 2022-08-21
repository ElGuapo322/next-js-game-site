import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
        src: url('/fonts/Roboto-Regular.ttf');
  }

  *,
  *::before,
  *::after { 
    box-sizing: border-box;
  }


  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color:#ebe8e8;
    background: #1C1C1C;
  }
`
