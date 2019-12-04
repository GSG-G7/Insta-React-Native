import React, { Component } from "react";
import { Platform, View } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";

import { bottomNav, general } from "./style";

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
export default BottomNav;
