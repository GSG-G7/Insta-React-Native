import React from "react";
import { Platform, Text, View } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";

import { nav, general } from "./style";

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

export default Nav;
