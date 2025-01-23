//Global imports
import { Dimensions, StyleSheet } from "react-native";

//File imports
import { Sizes } from "../../utils";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
    bottomSheetContainer: {
      height: SCREEN_HEIGHT,
      width: '100%',
      backgroundColor: 'transparent',
      position: 'absolute',
      top: SCREEN_HEIGHT,
      borderRadius:Sizes._25
    },
  });