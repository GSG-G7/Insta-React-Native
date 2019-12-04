import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Stories from "./component/Stories";
import Nav from "./component/Nav";
import BottomNav from "./component/BottomNav";
import Content from "./component/Content";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

/* ============================================== NavBar ============================================== */

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{ paddingBottom: 48 }}>
          <Nav />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Stories />
            <Content />
            <Content />
            <Content />
            <Content />
          </ScrollView>
          <BottomNav />
        </View>
      </SafeAreaView>
    );
  }
}
