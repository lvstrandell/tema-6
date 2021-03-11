import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 1rem;
    box-sizing: border-box;
    margin: 0;
    padding: 0%;
  }

  body {
    background: linear-gradient(to bottom, #e6fea8, #ffae42, #ff9549);
    min-height: 100vh;
    width: 100%;
  }

  @media screen and (max-width: 480px) { font-size: .8rem}
`;

export default GlobalStyle;