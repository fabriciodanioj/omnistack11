import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

import logo from "../../assets/logo.png";

export default () => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>43 casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subTitle}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>
      <View style={{ marginTop: 32 }}>
        
      </View>
    </View>
  );
};
