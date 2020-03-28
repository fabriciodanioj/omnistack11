import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { composeAsync } from "expo-mail-composer";

import api from ".././../services/api";

import styles from "./styles";

import logo from "../../assets/logo.png";

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  const mail = () => {
    composeAsync({
      recipients: [`${incident.email}`],
      subject: `Caso da ONG ${incident.name} sobre ${incident.title}`,
      body: `Olá, quero ajudar nesse caso: ${incident.description}`
    });
  };

  return (
    <View style={{ marginHorizontal: 20 }}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={20} color="#e02041" />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.incidentCard}>
          <View style={styles.incidentCardTop}>
            <View style={styles.incidentCardTopRow}>
              <Text style={styles.incidentTitle}>CASO:</Text>
              <Text style={{ ...styles.incidentContent, marginRight: 40 }}>
                {incident.title}
              </Text>
            </View>
            <View>
              <Text style={styles.incidentTitle}>ONG:</Text>
              <Text style={styles.incidentContent}>{incident.name}</Text>
            </View>
          </View>
          <Text style={{ ...styles.incidentTitle, marginTop: 10 }}>
            DESCRIÇÃO:
          </Text>
          <Text style={{ ...styles.incidentContent, marginRight: 24 }}>
            A cadelinha Jolie foi atropelada por um carro no bairro Santana e
            teve que passar por uma cirurgia às pressas.
          </Text>
          <Text style={{ ...styles.incidentTitle, marginTop: 10 }}>VALOR:</Text>
          <Text style={styles.incidentContent}>R$120,00</Text>
        </View>
      </View>

      <View>
        <View style={styles.contactCard}>
          <Text style={styles.contactCardTitle}>Salve o dia!</Text>
          <Text style={styles.contactCardTitle}>Seja o herói desse caso.</Text>
          <Text style={styles.contactCardText}>Entre em contato:</Text>
          <View style={styles.contactCardButtonArea}>
            <TouchableOpacity style={styles.contactCardButton}>
              <Text
                style={styles.contactCardButtonText}
                onPress={() => {
                  Linking.openURL(
                    "whatsapp://send?phone=+5538999836156&text=teste"
                  );
                }}
              >
                WhatsApp
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactCardButton}
              onPress={() => mail()}
            >
              <Text style={styles.contactCardButtonText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
