import { FlatList } from "react-native";
import { View } from "../Themed";
import StoryCard from "../StoryCard";

const StoriesCarrusel = () => {
  return (
    <View>
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
