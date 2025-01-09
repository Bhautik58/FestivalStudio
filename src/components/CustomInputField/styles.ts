//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
  container: {
    marginHorizontal: Sizes.FindSize(35),
    marginVertical: Sizes._11,
  },
  inputViewStyle: {
    borderWidth: Sizes.FindSize(1),
    borderBottomColor: Colors.white,
    borderColor: Colors.black_22,
    borderRadius: Sizes.FindSize(16),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    color: Colors.white,
    fontSize: Sizes._15,
    paddingVertical: Sizes.FindSize(5),
    paddingHorizontal: Sizes.FindSize(12),
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
  inputLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: Sizes._10,
    paddingBottom: Sizes._10,
  },
});
