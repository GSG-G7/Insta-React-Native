import React from "react";
import { Platform, StyleSheet, View, Image, Text } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const ContentHeader = () => (
  <View style={[general.container, content.header]}>
    <Image
      source={{ uri: "https://randomuser.me/api/portraits/men/29.jpg" }}
      style={content.userImg}
    />

    <View style={content.userInfo}>
      <Text style={[general.whiteColor, content.username]}>UserName</Text>
      <Text style={content.userCity}>User City</Text>
    </View>

    <Icon name="more-horiz" style={[general.whiteColor, content.moreIcon]} />
  </View>
);

const ContentImg = () => (
  <Image
    source={{
      uri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxu3FrWCOi59a-Zems8rHMPaxxsKThUlRg6-ZOGe9fFgmMblQi&s"
    }}
    style={content.mainImg}
  />
);

const ContentBar = () => (
  <View style={[general.container, content.contentBar]}>
    <Icon name="favorite-border" style={content.IconBar} />
    <Icon name="chat-bubble-outline" style={content.IconBar} />
    <Icon name="send" style={content.IconBar} />
    {/* <Icon name="more-horiz" style={[content.centerIconBar, content.IconBar]} /> */}
    <Icon
      name="bookmark-border"
      style={[content.leftIconBar, content.IconBar]}
    />
  </View>
);

const ContentDescription = () => (
  <Text style={[general.container, general.whiteColor]}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged.
  </Text>
);

const Content = () => (
  <View style={[general.mainBGColor, content.parent]}>
    <ContentHeader />
    <ContentImg />
    <ContentBar />
    <ContentDescription />
  </View>
);

const content = StyleSheet.create({
  parent: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#576574"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  userImg: {
    width: 40,
    height: 40,
    borderRadius: "50%"
  },
  userInfo: {
    marginLeft: 10,
    width: "75%"
  },
  username: {
    fontSize: 17,
    fontWeight: "bold"
  },
  userCity: {
    color: "#ccc"
  },
  moreIcon: {
    fontSize: 30
  },

  mainImg: {
    width: "100%",
    height: 300,
    marginTop: 20
  },

  contentBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15
  },
  IconBar: {
    fontSize: 20,
    color: "#fff"
  },
  leftIconBar: {
    marginLeft: 170
  },
  centerIconBar: {
    marginLeft: 20
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

export default Content;
