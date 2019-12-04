import React from "react";
import { Platform, Text, View, Image, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

import { stories, general } from "./style";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const OneStory = ({ imgURL, username }) => (
  <View style={stories.oneStory}>
    <LinearGradient
      colors={[
        "#405de6",
        "#5851db",
        "#833ab4",
        "#c13584",
        "#e1306c",
        "#fd1d1d",
        "#f56040",
        "#f77737",
        "#fcaf45",
        "#ffdc80"
      ]}
      style={stories.imgContainer}
    >
      <Image
        source={{
          uri: `${imgURL}`
        }}
        style={stories.storyImg}
      />
    </LinearGradient>
    <Text style={[general.whiteColor, stories.storyText]}>{username}</Text>
  </View>
);

const Stories = () => (
  <View style={[general.mainBGColor, stories.parent]}>
    <View style={[general.container, stories.head]}>
      <Text style={general.whiteColor}>Stories</Text>
      <View style={stories.watch}>
        <Icon name="play-arrow" style={stories.icon} />
        <Text style={general.whiteColor}>Watch all</Text>
      </View>
    </View>

    <ScrollView
      horizontal={true}
      style={stories.body}
      showsHorizontalScrollIndicator={false}
    >
      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/12.jpg"
        username="Nubilous"
      />
      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/42.jpg"
        username="Parricide"
      />
      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/41.jpg"
        username="Balbriggan"
      />
      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/40.jpg"
        username="Compeer"
      />
      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/11.jpg"
        username="Nasology"
      />
      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/88.jpg"
        username="Acrimony"
      />
      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/35.jpg"
        username="Abattoir"
      />
      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/22.jpg"
        username="Flyaway"
      />
    </ScrollView>
  </View>
);

export default Stories;
