//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../../../utils";
import { Fonts } from "../../../../assets";

export default StyleSheet.create({
    container :{ flex: 1, backgroundColor : Colors.black_22 },
    listVerticalGap : { marginTop: Sizes._32},
    bannerStyle:{
        height : Sizes.FindSize(177),
        width: Sizes.width - Sizes._40,
        marginHorizontal: Sizes._20
    },
    dotStyle: {
        height: Sizes._6,
        width: Sizes._6,
        borderRadius: Sizes._10,
        backgroundColor: '#4F4F4F',
        marginHorizontal: Sizes._5
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: Sizes._12
    },
    headerContainer:{
        width: '100%',
        paddingHorizontal: Sizes._22,
        flexDirection : 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    row:{
        flexDirection : 'row',
        alignItems:'center'
    },
    headerTitle:{
        fontFamily: Fonts.K2D_Bold,
        fontSize: Sizes._18,
        color : Colors.white
    }
})