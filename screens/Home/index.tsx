import React from "react";
import { ContentList, StoriesCarrusel } from "../../components";
import { Text, View } from "../../components/Themed";
import { ImagesMock } from "../../__mocks__/images.mock";

export const Home = () => {
  return (
    <View>
      <ContentList
        data={ImagesMock}
        HeaderComponent={() => <StoriesCarrusel type="followingStories" />}
      />
    </View>
  );
};
