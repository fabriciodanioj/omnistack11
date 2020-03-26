import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "./styles";

import api from "../../Services/api";

import logo from "../../assets/logo.svg";

export default function Register() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [value, setValue] = React.useState();

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post("/incident", {
        title,
        description,
        value
      });

      history.push("/home");
    } catch (error) {
      alert("Erro ao cadastrar caso, tente novamente");
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <div className="button-area">
            <button type="reset">Cancelar</button>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </Container>
  );
}
