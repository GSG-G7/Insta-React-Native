import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

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

/* =========================== Stories =========================== */
const stories = StyleSheet.create({
  parent: {
    borderBottomWidth: 1,
    borderBottomColor: "#576574"
  },

  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },

  watch: {
    flexDirection: "row",
    alignItems: "center"
  },

  icon: {
    fontSize: 18,
    color: "#fff"
  },

  body: {
    marginTop: 15
  },

  oneStory: {
    // textAlign: "center", // console error
    marginHorizontal: 10
  },

  imgContainer: {
    borderRadius: "50%",
    backgroundColor: "red",
    padding: 3,
    width: 60,
    height: 60
  },

  storyImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%"
  },

  storyText: {
    marginTop: 5,
    textAlign: "center" // console error
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

export default Stories;
