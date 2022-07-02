import React from "react";
import { Image } from "react-native";
import Layout from "../../constants/Layout";
import { Text, View } from "../Themed";
import Options from "./Options";
import Description from "./Description";
import Header from "./Header";
import { ContentCardStyles } from "./ContentCard.styles";

interface IProps {
  contentUrl: any;
}

const ContentCard = (props: IProps) => {
  const { contentUrl } = props;
  return (
    <View style={[ContentCardStyles.container]}>
      <Header />
      <Image
        style={{ width: Layout.window.width, height: Layout.window.height / 2 }}
        source={contentUrl}
      />
      <Options />
      <Text style={{ paddingHorizontal: 10, fontWeight: "500" }}>
        100 Likes
      </Text>
      <Description />
    </View>
  );
};

export default ContentCard;
