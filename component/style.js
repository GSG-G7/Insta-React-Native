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

// ================================
const nav = StyleSheet.create({
  parent: {
    borderBottomWidth: 1,
    borderBottomColor: "#576574",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50
  },

  logo: {
    fontSize: 25,
    color: "#fff",
    fontStyle: "italic",
    fontWeight: "bold"
  },

  icon: {
    fontSize: 22,
    color: "#fff"
  },

  send: {
    transform: [{ rotate: "-30deg" }]
  }
});
// ===================

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

// ==============================
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

const bottomNav = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%"
  },

  icon: {
    fontSize: 28,
    color: "#fff"
  }
});

export { general, nav, stories, content, bottomNav };
