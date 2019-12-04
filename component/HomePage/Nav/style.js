import { StyleSheet } from "react-native";

const general = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  whiteColor: {
    color: "#fff"
  },
  mainBGColor: {
    backgroundColor: "#353b48"
  }
});

const nav = StyleSheet.create({
  parent: {
    borderBottomWidth: 1,
    borderBottomColor: "#576574",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50
  },

  logo: {
    fontSize: 25,
    color: "#fff",
    fontStyle: "italic",
    fontWeight: "bold"
  },

  icon: {
    fontSize: 22,
    color: "#fff"
  },

  send: {
    transform: [{ rotate: "-30deg" }]
  }
});

export { general, nav };
