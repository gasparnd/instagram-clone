import { StyleSheet } from "react-native";

export const ContentCardStyles = StyleSheet.create({
  container: {
    marginBottom: "5%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  headerProfileImage: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 100,
  },
  contentOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 10,
  },
  contentOptionsIcon: {
    marginRight: 10,
  },
});
