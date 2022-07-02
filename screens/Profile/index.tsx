import { Linking, Pressable } from "react-native";
import { ProfileStyles } from "./Profile.styles";
import { Colors } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, View } from "../../components/Themed";
import {
  StoriesCarrusel,
  UserBio,
  Button,
  ProfileData,
} from "../../components/";
import React from "react";

export const Profile = () => {
  const theme = useColorScheme();
  const colors = Colors[theme];

  return (
    <>
      <View style={ProfileStyles.constainer}>
        <View style={ProfileStyles.userInfoContainer}>
          <View style={ProfileStyles.userInfoContainer}>
            <View style={ProfileStyles.userProfilePicContainer}>
              <View style={ProfileStyles.userProfilePic} />
            </View>
            <ProfileData
              postsNumber={150}
              followersNumber={15000}
              followingNumber={70}
            />
          </View>
        </View>
        <View style={ProfileStyles.userBioContainer}>
          <UserBio
            username="Username"
            bioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt."
            profileWebsiteLink="https://instagram.com"
          />
        </View>

        <View style={ProfileStyles.buttonContainer}>
          <Button text="Edit Profile" onPress={() => {}} type="borderLine" />
        </View>

        <View>
          <StoriesCarrusel />
        </View>
      </View>
      <View style={ProfileStyles.postOptions}>
        <Pressable
          style={[ProfileStyles.postOption, { borderBottomColor: colors.text }]}
        >
          <Text>A</Text>
        </Pressable>
        <Pressable
          style={[
            ProfileStyles.postOption,
            { borderBottomColor: "transparent" },
          ]}
        >
          <Text>B</Text>
        </Pressable>
      </View>
      <View style={{ marginTop: "5%", alignItems: "center" }}>
        <Text>No images yet.</Text>
      </View>
    </>
  );
};
