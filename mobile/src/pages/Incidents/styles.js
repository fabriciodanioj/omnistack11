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
  },
  incidentCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 20
  },
  incidentCardTop: {
    flexDirection: "row"
  },
  incidentTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
    color: "#41414d",
    marginLeft: 25,
    marginTop: 25
  },
  incidentContent: {
    fontSize: 14,
    marginBottom: 24,
    color: "#737380",
    marginLeft: 25
  },
  cardButton: {
    backgroundColor: "#e02041",
    height: 58,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 25,
    justifyContent: "space-between",
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8
  },
  cardButtonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
