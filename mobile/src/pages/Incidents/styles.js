import { StyleSheet } from "react-native";
import constants from "expo-constants";

export default StyleSheet.create({
  header: {
    marginTop: constants.statusBarHeight + 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 48
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 15,
    lineHeight: 15,
    color: "#737380"
  },
  headerTextBold: {
    fontFamily: "Roboto",
    fontWeight: "bold"
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 30,
    color: "#13131A",
    marginBottom: 16
  },
  subTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    lineHeight: 30,
    color: "#737380",
    maxWidth: 265
  }
});
