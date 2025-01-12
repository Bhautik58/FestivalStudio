//Global imports
import { StyleSheet } from "react-native";
//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black_22,
  },
  backArrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: Sizes._22,
  },
  heading: {
    fontSize: Sizes._18,
    color: Colors.white,
    fontFamily: Fonts.K2D_Medium,
    lineHeight: Sizes.FindSize(24),
    textAlign: "center",
  },
  logoContainer: {
    backgroundColor: Colors.primary20,
    height: Sizes.FindSize(100),
    width: Sizes.FindSize(100),
    marginTop: Sizes._35,
    marginBottom: Sizes._20,
    borderRadius: Sizes._10,
    alignSelf: "center",
  },
  userIconStyle: {
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  updateLogoText: {
    fontSize: Sizes._20,
    color: Colors.white,
    fontFamily: Fonts.K2D_Medium,
    lineHeight: Sizes.FindSize(26),
    textAlign: "center",
  },
  infoInputContainer: {
    marginTop: Sizes._30,
  },
  addProfileBtn: {
    backgroundColor: Colors.blue,
    borderRadius: Sizes._20,
    flexWrap: "wrap",
    alignSelf: "center",
    paddingHorizontal: Sizes._36,
    paddingVertical: Sizes._10,
    marginTop: Sizes._30,
  },
  addProfileText: {
    fontSize: Sizes._14,
    color: Colors.white,
    lineHeight: Sizes._20,
  },
  skipBtnText: {
    fontSize: Sizes._14,
    color: Colors.white,
    lineHeight: Sizes._16,
    marginVertical: Sizes._15,
    textAlign: "center",
  },
  editIconContainer: {
    height: Sizes._26,
    width: Sizes._26,
    borderRadius: Sizes._50,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    bottom: -Sizes._6,
    right: -Sizes._6,
    position: "absolute",
  },
  selectedImageStyle: {
    height: "100%",
    width: "100%",
    borderRadius: Sizes._10,
  },
});
