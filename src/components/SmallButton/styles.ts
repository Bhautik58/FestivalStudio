import { StyleSheet } from "react-native";
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
    container: {
      borderRadius: Sizes._25,
      paddingVertical: Sizes._4,
      minWidth:Sizes.FindSize(64),
      justifyContent:'center',
      alignItems:"center",
    },
    labelStyle: {
      fontSize: Sizes._12,
      fontFamily: Fonts.K2D_Regular,
      color: Colors.white,
    },
    border: {
      borderWidth: Sizes.FindSize(1),
      borderColor: Colors.white,
    },
    background: {
      backgroundColor: Colors.blue,
      shadowColor: Colors.white,
      elevation: 5,
      shadowOffset: {
        height: Sizes.FindSize(1),
        width: Sizes.FindSize(2),
      },
      shadowRadius: Sizes.FindSize(2),
      shadowOpacity: 0.2,
    },
  });
  