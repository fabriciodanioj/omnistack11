import { StyleSheet } from "react-native";
import constants from "expo-constants";

export default StyleSheet.create({
  header: {
    marginTop: constants.statusBarHeight + 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30
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
  contactCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 24
  },
  contactCardTitle: {
    fontWeight: "500",
    fontSize: 20,
    color: "#13131A"
  },
  contactCardText: {
    fontSize: 15,
    marginTop: 10
  },
  contactCardButtonArea: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  contactCardButton: {
    width: 132,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E02041",
    borderRadius: 8
  },
  contactCardButtonText: {
    fontSize: 15,
    color: "#fff"
  }
});
