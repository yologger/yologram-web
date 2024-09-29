import reset from 'styled-reset';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle, theme } from '~/styledComponents';

const GlobalStyles = createGlobalStyle<{}>`
  ${reset}
  ${styledNormalize}
  
  @font-face {
    font-family: 'AppleSDGothic';
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    font-family: ${theme.font.family};
    font-weight: 400;
    color: ${theme.color.black};
  }
  body {
    background-color: ${theme.color.background};
    font-size: ${theme.font.base};
  }
  body, input, textarea, select, button {
    font-synthesis: none;
    -moz-font-feature-settings: 'kern';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    direction: ltr;
    text-align: left;
    color: ${theme.color.black};
    letter-spacing: -0.5px;
    outline: 0;
    border: 0;
  }
  img {
    vertical-align: bottom;
  }
  button, input {
    padding: 0;
    border: 0;
  }
  button,
  input[type="text"],
  input[type="tel"],
  input[type="number"] {
    appearance: none;
  }
  button {
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }
  a {
    color: ${theme.color.black};
    text-decoration: none;
    cursor: pointer;
  }
  .body-no-scroll {
    overflow: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: ${theme.font.base};
    font-weight: 400;
    margin: 0;
  }
  .grecaptcha-badge { 
    visibility: hidden;
  }
`;

export default GlobalStyles;