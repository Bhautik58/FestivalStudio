//Global imports
import { Platform, StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

const bottomBorderStyle = Platform.select({
  android: {
    borderTopColor: Colors.black_22,
    borderEndColor: Colors.white,
    borderEndWidth: 0.01,
    borderStartWidth: 0.01,
    borderStartColor: Colors.white,
  },
  ios: {
    borderColor: Colors.black_22,
  },
});

export default StyleSheet.create({
  container: {
    marginHorizontal: Sizes.FindSize(35),
    marginVertical: Sizes._11,
  },
  inputViewStyle: {
    ...bottomBorderStyle,
    borderWidth: 1,
    borderBottomColor: Colors.white,
    borderRadius: Sizes.FindSize(16),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    color: Colors.white,
    fontSize: Sizes._15,
    paddingBottom: Sizes._15,
    height: Sizes._40,
    paddingVertical: Sizes.FindSize(5),
    marginHorizontal: Sizes.FindSize(10),
  },
  errorTextStyle: {
    marginTop: Sizes.FindSize(5),
    fontSize: Sizes.FindSize(13),
    marginHorizontal: Sizes._8,
    color: Colors.red,
  },
  heading: {
    fontSize: Sizes._18,
    color: Colors.white,
    fontFamily: Fonts.K2D_ExtraBold,
    lineHeight: Sizes.FindSize(24),
    marginLeft: Sizes._10,
  },
  inputIconContainer: {
    marginLeft: Sizes._10,
    marginBottom: Sizes._11,
  },
});
