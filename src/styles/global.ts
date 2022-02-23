import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary:      #00A1FE;
    --primaryDark:  #283CA5;
    --secundary:    #212121;

    --danger:       #e52e4d;
    --warning:      #FFB300;
    --success:      #33CC95;

    --title:        #363f5f;
    --text:         #969cb3;

    --shape:        #FFFFFF;
    --background:   #f0f2f5;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background-color: var(--background) ;
    -webkit-font-smoothing: antialiased;
  }
  border-style, input, textarea, button {
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
