import React from "react";
import { Text, View } from "../Themed";
import { ContentCardStyles } from "./ContentCard.styles";

const Options = () => {
  return (
    <View style={ContentCardStyles.contentOptionsContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={ContentCardStyles.contentOptionsIcon}>Likes</Text>
        <Text style={ContentCardStyles.contentOptionsIcon}>Comments</Text>
        <Text style={ContentCardStyles.contentOptionsIcon}>Share</Text>
      </View>

      <Text style={ContentCardStyles.contentOptionsIcon}>Save</Text>
    </View>
  );
};

export default Options;
