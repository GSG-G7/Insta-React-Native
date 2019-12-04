import React, { Component } from "react";
import { Platform, Text, View, Image, ScrollView } from "react-native";

import Nav from "./Nav";
import Stories from "./Stories";
import Content from "./Content";
import BottomNav from "./BottomNav";

export class Home extends Component {
  render() {
    return (
      <View style={{ paddingBottom: 48 }}>
        <Nav />

        <ScrollView>
          <Stories />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </ScrollView>

        <BottomNav />
      </View>
    );
  }
}

export default Home;
