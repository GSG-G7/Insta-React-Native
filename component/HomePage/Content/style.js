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

export { general, content };
