import React from "react";
import { Text, View } from "../Themed";
import { ProfileDataStyles } from "./ProfileData.styles";

interface IProps {
  postsNumber: number;
  followersNumber: number;
  followingNumber: number;
}

const ProfileData = (props: IProps) => {
  const { postsNumber, followersNumber, followingNumber } = props;
  return (
    <View style={ProfileDataStyles.userInfoStatsContainer}>
      <View style={ProfileDataStyles.userStatContainer}>
        <Text style={{ fontWeight: "900", textAlign: "center" }}>
          {postsNumber}
        </Text>
        <Text>Posts</Text>
      </View>

      <View style={ProfileDataStyles.userStatContainer}>
        <Text style={{ fontWeight: "900", textAlign: "center" }}>
          {followersNumber}
        </Text>
        <Text>Followers</Text>
      </View>

      <View style={ProfileDataStyles.userStatContainer}>
        <Text style={{ fontWeight: "900", textAlign: "center" }}>
          {followingNumber}
        </Text>
        <Text>Following</Text>
      </View>
    </View>
  );
};

export default ProfileData;
