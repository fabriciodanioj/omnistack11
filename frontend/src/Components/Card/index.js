import React from "react";

import { Container } from "./styles";

import api from "../../Services/api";

export default function Cards({ id, title, description, value }) {
  const handleDeleteIncident = async () => {
    try {
      await api.delete(`/incident/${id}`);
    } catch (error) {
      alert("Erro ao deletar caso, tente novamente");
    }
  };

  return (
    <Container>
      <button onClick={handleDeleteIncident}>
        <span class="material-icons">delete_outline</span>
      </button>
      <div>
        <h1>CASO:</h1>
        <p>{title}</p>
        <h1>DESCRIÇÃO:</h1>
        <p>{description}</p>
        <h1>VALOR:</h1>
        <p>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(value)}
        </p>
      </div>
    </Container>
  );
}
