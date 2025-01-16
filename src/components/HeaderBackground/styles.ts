//Global imports
import { Platform, StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";

export const styles = (top: number) => {

  const NOTCH_HEIGHT = top > 0 ? 45 : top;

  const CON_HEIGHT =
    Platform.OS === "ios" ? Sizes.FindSize(50 + NOTCH_HEIGHT) : Sizes._50;

  return StyleSheet.create({
    wrapper: {
      height: CON_HEIGHT,
      width: "100%",
      backgroundColor: Colors.primary20,
    },
    innerShadow: {
      flex: 1,
      justifyContent:'flex-end',
      paddingTop: NOTCH_HEIGHT,
    },
    content: {
      height: Sizes._50,
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
