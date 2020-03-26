import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Container } from "./styles";

import api from "../../Services/api";
import { login } from "../../Services/auth";

import logo from "../../assets/logo.svg";
import heroes from "../../assets/heroes.png";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await api.post("/session", {
        email,
        password
      });

      login(response.data.token);

      history.push("/home");

      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Falha no login, tente novamente!");
    }
  };

  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
        <h1>Faça seu login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
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
          <button type="submit">Entrar</button>
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
