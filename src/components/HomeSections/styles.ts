//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
    container : { paddingHorizontal: Sizes.FindSize(9) },
    itemHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.FindSize(11)
    },
    postContainer: {
        paddingHorizontal: Sizes.FindSize(11)
    },
    postImage: {
        height: Sizes.FindSize(85),
        width: Sizes.FindSize(85),
    },
    sectionTitleText:{
        fontFamily: Fonts.K2D_Medium,
        fontSize: Sizes._10,
        color: Colors.white
    },
    underlineView:{
        marginTop: Sizes.FindSize(2),
        height: Sizes.FindSize(0.5),
        backgroundColor : Colors.blue,
        marginLeft: Sizes.FindSize(10),
        width: Sizes.FindSize(99)
    },
    seeAllContainer:{
        width: Sizes._45,
        height: Sizes._14,
        borderRadius: Sizes.FindSize(14),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor : Colors.blue
    },
    seeAllText:{
        fontFamily: Fonts.K2D_Light,
        fontSize:Sizes._8,
        color: Colors.white
    },
    listContainer : { marginTop: Sizes.FindSize(19.5) }
})