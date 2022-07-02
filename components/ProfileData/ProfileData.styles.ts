import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";

export const ProfileDataStyles = StyleSheet.create({
  userInfoStatsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: Layout.window.width - 100,
  },
  userStatContainer: {
    margin: "5%",
  },
});
