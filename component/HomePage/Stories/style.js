import { StyleSheet } from "react-native";

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
    textAlign: "center"
  }
});

export { general, stories };
