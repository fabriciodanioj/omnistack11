import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

import logo from "../../assets/logo.svg";

export default function Register() {
  return (
    <Container>
      <div className="content">
        <div className="main">
          <img src={logo} alt="Logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <div>
            <span class="material-icons">arrow_back</span>
            <Link className="link" to="/login">
              Voltar para o login
            </Link>
          </div>
        </div>
        <form>
          <input type="text" placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar Senha" />
          <input type="number" placeholder="Telefone" />
          <div className="location">
            <input type="text" placeholder="Cidade" />
            <input
              type="text"
              placeholder="UF"
              maxlength="2"
              style={{ textTransform: "uppercase" }}
            />
          </div>
          <button>Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
