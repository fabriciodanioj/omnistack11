import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px 'Roboto', sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: auto;
  }

  input, button, textarea {
    font: 400 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    background-color: #E02041;
    width: 100%;
    height: 60px;
    border: none;
    border-radius:8px;
    color: #fff;
    font-size: 18px;
    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(90%)
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }
`;
