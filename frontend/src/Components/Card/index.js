import React from "react";

import { Container } from "./styles";

export default function Cards() {
  return (
    <Container>
      <button>
        <span class="material-icons">delete_outline</span>
      </button>
      <div>
        <h1>CASO:</h1>
        <p>Cadelinha atropelada</p>
        <h1>DESCRIÇÃO:</h1>
        <p>
          A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve
          que passar por uma cirurgia às pressas.
        </p>
        <h1>VALOR:</h1>
        <p>R$ 120,00</p>
      </div>
    </Container>
  );
}
