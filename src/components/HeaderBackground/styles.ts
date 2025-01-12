//Global imports
import { Platform, StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";

const CON_HEIGHT = Platform.OS === "ios" ? Sizes.FindSize(96) : Sizes._50;

export default StyleSheet.create({
  wrapper: {
    height: CON_HEIGHT,
    width: "100%",
    backgroundColor: Colors.primary20,
  },
  innerShadow: {
    flex: 1,
  },
  content: {
    marginTop: Platform.OS === "ios" ? CON_HEIGHT / 2 : 0,
    height: Platform.OS === "ios" ? CON_HEIGHT / 2 : CON_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
});
