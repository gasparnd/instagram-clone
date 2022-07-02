import { Pressable, TextStyle, ViewStyle } from "react-native";
import { Colors } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Text } from "../Themed";
import { ButtonStyles } from "./Button.styles";

type TButton = "primary" | "borderLine";

interface IProps {
  text: string;
  onPress: () => void;
  buttonStylesContainer?: ViewStyle;
  textStylesContainer?: TextStyle;
  type: TButton;
}

const Button = (props: IProps) => {
  const theme = useColorScheme();
  const colors = Colors[theme];

  const {
    text,
    onPress,
    buttonStylesContainer,
    textStylesContainer,
    type,
  } = props;

  return (
    <Pressable
      onPress={onPress}
      style={[
        ButtonStyles.button,
        {
          borderColor: type === "primary" ? "#1FA1FF" : colors.borderLight,
          backgroundColor: type === "primary" ? "#1FA1FF" : "transparent",
        },
        buttonStylesContainer,
      ]}
    >
      <Text
        style={[
          ButtonStyles.buttonText,
          textStylesContainer,
          { color: type === "primary" ? "#FFF" : colors.text },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
