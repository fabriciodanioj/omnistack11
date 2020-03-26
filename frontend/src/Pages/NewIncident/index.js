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
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <div>
            <span class="material-icons">arrow_back</span>
            <Link className="link" to="/home">
              Voltar para home
            </Link>
          </div>
        </div>
        <form>
          <input type="text" placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <input type="number" placeholder="Valor em reais" />
          <div className="button-area">
            <button>Cancelar</button>
            <button>Cadastrar</button>
          </div>
        </form>
      </div>
    </Container>
  );
}
