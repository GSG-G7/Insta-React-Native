import React, { Component } from "react";
import { Platform, View } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";

import { bottomNav, general } from "./style";

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
