import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
const Nav = () => (
  <View style={[general.container, general.mainBGColor, nav.parent]}>
    <Icon name="camera-alt" style={nav.icon} />
    <Text style={nav.logo}>Instagram</Text>
    <Icon name="send" style={[nav.send, nav.icon]} />
  </View>
);
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

export default Nav;
