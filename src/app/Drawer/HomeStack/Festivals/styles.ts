//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../../../utils";
import { Fonts } from "../../../../assets";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black_22
    },
    headerContainer: {
        width: '100%',
        paddingHorizontal: Sizes._22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: Fonts.K2D_Bold,
        fontSize: Sizes._18,
        color: Colors.white
    },
    postImageContainer:{
        width: (Sizes.width - Sizes.FindSize(88)) / 3,
        height: (Sizes.width - Sizes.FindSize(88)) / 3,
        borderRadius : Sizes._10,
        marginHorizontal: Sizes._11,
        marginBottom: Sizes._20
    },
    postImage:{
        height: '100%',
        width : '100%'
    },
    listContainer: {flex:1, marginTop: Sizes._20 }
})