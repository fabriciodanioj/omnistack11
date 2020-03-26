import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "./styles";

import api from "../../Services/api";

import logo from "../../assets/logo.svg";

export default function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [city, setCity] = React.useState("");
  const [uf, setUf] = React.useState("");

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = { name, email, password, phone, city, uf };

      const response = await api.post("/ong", data);

      console.log(response.status);

      history.push("/login");
    } catch (error) {
      alert("Erro ao fazer cadastro, tente novamente!");
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="number"
            placeholder="Telefone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <div className="location">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              maxLength="2"
              style={{ textTransform: "uppercase" }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
