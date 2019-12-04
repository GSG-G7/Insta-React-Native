import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class BottomNav extends Component {
  state = {
    clicked: false
  };

  render() {
    return (
      <View style={[general.container, general.mainBGColor, bottomNav.parent]}>
        <Icon name="home" style={bottomNav.icon} />
        <Icon name="search" style={bottomNav.icon} />
        <Icon name="add-box" style={bottomNav.icon} />
        <Icon name="favorite-border" style={bottomNav.icon} />
        <Icon name="person" style={bottomNav.icon} />
      </View>
    );
  }
}

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

export default BottomNav;
