//Global imports
import { Dimensions, StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../../../utils";
import { Fonts } from "../../../../assets";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black_22,
  },
  headerContainer: {
    width: "100%",
    paddingHorizontal: Sizes._22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: Fonts.K2D_Bold,
    fontSize: Sizes._18,
    color: Colors.white,
  },
  postImageContainer: {
    width: Sizes.width - Sizes.FindSize(54),
    height: Sizes.width - Sizes.FindSize(54),
    backgroundColor: Colors.white,
    marginHorizontal: Sizes.FindSize(27),
  },
  postImage: {
    height: "100%",
    width: "100%",
    borderRadius: Sizes._6,
  },
  listContainer: { flex: 1, justifyContent: "space-between" },
  controlButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: Sizes._20,
    width: Sizes._20,
    backgroundColor: Colors.primary40,
    borderRadius: Sizes.FindSize(3),
  },
  tabItemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabLabel: {
    marginTop: Sizes._5,
    fontSize: Sizes._12,
    fontFamily: Fonts.K2D_Medium,
    lineHeight: Sizes._16,
    textAlign: "center",
    color: Colors.white,
  },
  layerButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: Sizes._24,
    width: Sizes._24,
    backgroundColor: Colors.blue,
    borderRadius: Sizes.FindSize(3),
    alignSelf: "flex-end",
    marginRight: Sizes._22,
    marginTop: Sizes._15,
  },
  imageSelectorContainer: {
    height: Sizes._56,
    width: Sizes._56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary40,
    borderRadius: Sizes._6,
  },
  logoPickerContainer: { padding: Sizes._32, justifyContent: "space-between" },
  imageRemoveButton: {
    position: "absolute",
    top: -Sizes._5,
    right: -Sizes._5,
    height: Sizes._20,
    width: Sizes._20,
    borderRadius: Sizes._10,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  emptyView: {
    height: Sizes.FindSize(120),
    width: Sizes._20,
  },
  glassContainerStyle: {
    flex: 1,
    backgroundColor: "rgba(100,100,100,0.4)",
    borderRadius: Sizes._25,
    borderWidth: 0.5,
    borderColor: "#D9D9D9",
  },
  bottomsheetTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Sizes._10,
  },
  sheetTab: {
    width: "37%",
    paddingBottom: Sizes.FindSize(3),
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    marginBottom: Sizes.FindSize(3),
  },

  sheetTabBrown: {
    borderBottomColor: Colors.primary,
  },

  tabLable: {
    textAlign: "center",
    fontSize: Sizes._18,
    fontFamily: Fonts.K2D_Medium,
    color: Colors.white,
    paddingBottom: Sizes._5,
  },
  tabLableBrown: {
    color: Colors.primary,
  },
  backgroundImageCon: {
    height: Sizes.FindSize(70),
    width: Sizes.FindSize(70),
    marginHorizontal: Sizes._8,
    marginVertical: Sizes._10,
    borderRadius: Sizes.FindSize(5),
  },
  imagePickerItemCon: {
    backgroundColor: Colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundImage: {
    height: "100%",
    width: "100%",
    borderRadius: Sizes.FindSize(5),
    resizeMode: "contain",
  },
  backgroundPostsCon: {
    paddingHorizontal: Sizes._16,
    paddingBottom: Sizes.FindSize(100),
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: width - Sizes._40,
    backgroundColor: "white",
    borderRadius: Sizes._10,
    padding: Sizes._20,
    justifyContent: "center",
    alignItems: "center",
    elevation: Sizes._20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Sizes._20,
  },
  title: {
    fontSize: Sizes._20,
    fontFamily:Fonts.K2D_Bold
  },
  confirmButtonText:{
    fontSize:Sizes._18,
    fontFamily:Fonts.K2D_Bold,
    color:Colors.blue
  }
});
