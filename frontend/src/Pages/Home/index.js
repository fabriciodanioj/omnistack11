import React from "react";

import Header from "../../Components/Header";
import Card from "../../Components/Card";


import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header name="APAD" />
      <h1 className="title">Casos cadastrados</h1>
      <section>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </Container>
  );
}
