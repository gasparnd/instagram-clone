import { FlatList } from "react-native";
import { View } from "../Themed";
import StoryCard from "../StoryCard";
import useColorScheme from "../../hooks/useColorScheme";
import { Colors } from "../../constants/Colors";

type TStoriesCarrusel = "ownStories" | "followingStories";

interface IProps {
  type: TStoriesCarrusel;
}

const StoriesCarrusel = (props: IProps) => {
  const { type } = props;

  const theme = useColorScheme();
  const colors = Colors[theme];

  return (
    <View
      style={{
        borderBottomWidth: type === "followingStories" ? 1.5 : 0,
        borderBottomColor:
          type === "followingStories" ? colors.borderLight : "",
      }}
    >
      <FlatList
        horizontal
        data={[1, 2, 3, 4, 3, 3, 3, 3, 3, 5, 5]}
        renderItem={({ item, index }) => (
          <View style={{ paddingBottom: 5 }}>
            <StoryCard />
          </View>
        )}
        ListFooterComponent={() => <StoryCard add={true} />}
      />
    </View>
  );
};

export default StoriesCarrusel;
