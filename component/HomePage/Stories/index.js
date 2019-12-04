import React from "react";
import { Platform, Text, View, Image, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

import { stories, general } from "./style";

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

      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/45.jpg"
        username="Abbatial"
      />

      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/15.jpg"
        username="Diffident"
      />

      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/71.jpg"
        username="Spackle"
      />

      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/78.jpg"
        username="Oncology"
      />

      <OneStory
        imgURL="https://randomuser.me/api/portraits/men/64.jpg"
        username="Slapstick"
      />
    </ScrollView>
  </View>
);

export default Stories;
