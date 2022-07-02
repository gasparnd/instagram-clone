const tintColorLight: string = "#2f95dc";
const tintColorDark: string = "#fff";

interface IColorsNames {
  text: string;
  background: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  link: string;
  borderLight: string;
}

interface IColors {
  light: IColorsNames;
  dark: IColorsNames;
}

export const Colors: IColors = {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    link: "#004C8B",
    borderLight: "#CBCBCB",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    link: "#2ea0ff",
    borderLight: "#fff",
  },
};
