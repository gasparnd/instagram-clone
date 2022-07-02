import { Image, ScrollView } from "react-native";
import GridList from "react-native-grid-list";
import { ImagesMock } from "../../__mocks__/images.mock";
import { View } from "../Themed";

interface IProps {}

const renderItem = ({ item, index }: any) => (
  <Image style={{ width: "100%", height: "100%" }} source={item.thumbnail} />
);

const ImageGrid = (props?: IProps) => {
  return (
    <View>
      <GridList numColumns={3} renderItem={renderItem} data={ImagesMock} />
    </View>
  );
};

export default ImageGrid;
