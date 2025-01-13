//Global imports
import { Platform, StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";

export const styles = (top: number) => {
  const CON_HEIGHT =
    Platform.OS === "ios" ? Sizes.FindSize(50 + top) : Sizes._50;

  return StyleSheet.create({
    wrapper: {
      height: CON_HEIGHT,
      width: "100%",
      backgroundColor: Colors.primary20,
    },
    innerShadow: {
      flex: 1,
    },
    content: {
      marginTop: Platform.OS === "ios" ? Sizes.FindSize(top) : 0,
      height: Sizes._50,
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
