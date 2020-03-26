import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import logo from "../../assets/logo.svg";
import heroes from "../../assets/heroes.png";

export default function Login() {
  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
        <h1>Faça seu login</h1>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Senha" />
          <button>Entrar</button>
        </form>
        <div>
          <span class="material-icons">exit_to_app</span>
          <Link className="link" to="/register">
            Não tenho cadastro
          </Link>
        </div>
      </div>
      <img src={heroes} alt="Heroes" />
    </Container>
  );
}
