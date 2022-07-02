import { Colors } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, View } from "../Themed";
import { StorieCardStyles } from "./StorieCard.styles";

interface IProps {
  add?: boolean;
  higtLight?: boolean;
}

const StoryCard = (props: IProps) => {
  const theme = useColorScheme();
  const colors = Colors[theme];

  const { add } = props;

  return (
    <View style={StorieCardStyles.container}>
      <View
        style={[StorieCardStyles.image, { borderColor: colors.borderLight }]}
      >
        {!!add && <Text>+</Text>}
      </View>
      {!add && <Text style={StorieCardStyles.text}>gasparnd</Text>}
    </View>
  );
};

export default StoryCard;
