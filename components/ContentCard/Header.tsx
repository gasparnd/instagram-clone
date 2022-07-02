import React from "react";
import { View, Text } from "../Themed";
import { ContentCardStyles } from "./ContentCard.styles";

const Header = () => {
  return (
    <View style={ContentCardStyles.headerContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={ContentCardStyles.headerProfileImage} />
        <Text
          style={{ marginLeft: 10, textAlign: "center", fontWeight: "500" }}
        >
          Username
        </Text>
      </View>
      <Text>...</Text>
    </View>
  );
};

export default Header;
