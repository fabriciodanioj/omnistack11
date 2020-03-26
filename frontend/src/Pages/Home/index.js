import React from "react";

import Header from "../../Components/Header";
import Card from "../../Components/Card";

import api from "../../Services/api";

import { Container } from "./styles";

export default function Home() {
  const [incidents, setIncidents] = React.useState([]);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/profile");

      setIncidents(response.data.incidents);
      setName(response.data.name[0].name);
    };
    fetchData();
  }, [incidents]);

  return (
    <Container>
      <Header name={name} />
      <h1 className="title">Casos cadastrados</h1>
      <section>
        {incidents.map(incident => (
          <Card
            key={incident.id}
            id={incident.id}
            title={incident.title}
            description={incident.description}
            value={incident.value}
          />
        ))}
      </section>
    </Container>
  );
}
