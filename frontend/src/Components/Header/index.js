import React from "react";

import { Link, useHistory } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { logout } from "../../Services/auth";

import { Container } from "./styles";

export default function Header({ name }) {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/login");
  };
  return (
    <Container>
      <div>
        <img src={logo} alt="Be the Hero" />
        <h1>Bem vinda, {name}</h1>
      </div>
      <div className="buttons">
        <Link to="/new">
          <button>Cadastrar novo caso</button>
        </Link>
        <button className="logoff" onClick={handleLogout}>
          <span class="material-icons">power_settings_new</span>
        </button>
      </div>
    </Container>
  );
}
