import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";

export const ProfileStyles = StyleSheet.create({
  constainer: {
    padding: "3%",
  },
  userInfoContainer: { flexDirection: "row", alignItems: "center" },
  userInfoStatsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: Layout.window.width - 100,
  },
  userStatContainer: {
    margin: "5%",
  },
  userProfilePicContainer: {
    width: 88,
  },
  userProfilePic: {
    borderRadius: 100,
    borderWidth: 2,
    height: 75,
    width: 75,
  },
  userBioContainer: {
    marginBottom: "6%",
    marginTop: "5%",
  },
  buttonContainer: {
    marginBottom: "5%",
  },
  postOptions: {
    width: Layout.window.width,
    flexDirection: "row",
    height: "auto",
  },
  postOption: {
    alignItems: "center",
    borderBottomWidth: 1.3,
    width: Layout.window.width / 2,
  },
});
