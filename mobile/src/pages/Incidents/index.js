import React from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import api from ".././../services/api";

import logo from "../../assets/logo.png";

export default () => {
  const navigation = useNavigation();
  const [incidents, setIncidents] = React.useState([]);
  const [total, setTotal] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/incident");
      setIncidents(response.data);
      setTotal(response.headers["x-total-count"]);
    };
    fetchData();
  }, []);

  return (
    <View style={{ marginHorizontal: 20 }}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subTitle}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>
      <View style={{ marginTop: 32 }}>
        <FlatList
          data={incidents}
          keyExtractor={incident => String(incident.id)}
          style={{ marginBottom: 480 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item = incident }) => (
            <View style={styles.incidentCard}>
              <View style={styles.incidentCardTop}>
                <View style={styles.incidentCardTopRow}>
                  <Text style={styles.incidentTitle}>CASO:</Text>
                  <Text style={{ ...styles.incidentContent, marginRight: 40 }}>
                    {item.title}
                  </Text>
                </View>
                <View>
                  <Text style={styles.incidentTitle}>ONG:</Text>
                  <Text style={styles.incidentContent}>{item.name}</Text>
                </View>
              </View>
              <Text style={{ ...styles.incidentTitle, marginTop: 10 }}>
                Valor:
              </Text>
              <Text style={styles.incidentContent}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(item.value)}
              </Text>
              <TouchableOpacity
                style={styles.cardButton}
                onPress={() => navigation.navigate("Detail", incident)}
              >
                <Text style={styles.cardButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};
