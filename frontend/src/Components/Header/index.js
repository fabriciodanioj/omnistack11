import React from "react";

import logo from '../../assets/logo.svg'

import { Container } from "./styles";

export default function Header({ name }) {
  return (
    <Container>
      <div>
        <img src={logo} alt="Be the Hero" />
        <h1>Bem vinda, {name}</h1>
      </div>
      <div className="buttons">
        <button>Cadastrar novo caso</button>
        <button className="logoff">
          <span class="material-icons">power_settings_new</span>
        </button>
      </div>
    </Container>
  );
}
