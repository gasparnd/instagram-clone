import React from "react";
import { Linking, Pressable } from "react-native";
import { Colors } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Text } from "../Themed";
import { UserBioStyles } from "./UserBio.styles";

interface IProps {
  username: string;
  bioDescription?: string;
  profileWebsiteLink?: string;
}

const UserBio = (props: IProps) => {
  const theme = useColorScheme();
  const colors = Colors[theme];

  const { username, bioDescription, profileWebsiteLink } = props;

  return (
    <>
      <Text style={UserBioStyles.userName}>{username}</Text>
      {bioDescription && <Text>{bioDescription}</Text>}
      {profileWebsiteLink && (
        <Pressable
          style={{ alignSelf: "flex-start" }}
          onPress={() => Linking.openURL(profileWebsiteLink)}
        >
          <Text style={{ color: colors.link }}>{profileWebsiteLink}</Text>
        </Pressable>
      )}
    </>
  );
};

export default UserBio;
