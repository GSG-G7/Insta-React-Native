import React from "react";
import { Platform, Text, View } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";

import { nav, general } from "./style";

const Nav = () => (
  <View style={[general.container, general.mainBGColor, nav.parent]}>
    <Icon name="camera-alt" style={nav.icon} />
    <Text style={nav.logo}>Instagram</Text>
    <Icon name="send" style={[nav.send, nav.icon]} />
  </View>
);

export default Nav;
