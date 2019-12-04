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

import Home from "./component/HomePage";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    );
  }
}
