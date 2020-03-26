import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { Container } from "./styles";

export default function Header({ name }) {
  return (
    <Container>
      <div>
        <img src={logo} alt="Be the Hero" />
        <h1>Bem vinda, {name}</h1>
      </div>
      <div className="buttons">
        <Link to="/new" >
          <button>Cadastrar novo caso</button>
        </Link>
        <button className="logoff">
          <span class="material-icons">power_settings_new</span>
        </button>
      </div>
    </Container>
  );
}
