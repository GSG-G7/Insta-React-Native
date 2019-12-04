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

const bottomNav = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%"
  },

  icon: {
    fontSize: 28,
    color: "#fff"
  }
});

export { general, bottomNav };
