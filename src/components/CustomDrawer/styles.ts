//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black_22,
        opacity: 1
    },
    headerContainer: {
        height: Sizes.FindSize(224),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: Sizes.FindSize(1),
        borderColor: Colors.drawerBGColor
    },
    logoStyle: {
        height: Sizes.FindSize(47),
        width: Sizes.FindSize(102)
    },
    logoBgStyle: {
        height: Sizes.FindSize(27),
        width: Sizes.FindSize(128)
    },
    logoText:{
        fontFamily: Fonts.K2D_Medium,
        fontSize: Sizes._14,
        color: Colors.white,
        marginTop : Sizes.FindSize(5)
    },
    blurContainer:{ flex : 1},
    bodyContainer:{
        padding : Sizes._20
    },
    linkContainer:{ flex: 1, flexDirection: 'row', alignItems:'center', gap: Sizes._18,
        marginBottom: Sizes._20, height: Sizes._20
    },
    linkText:{
        fontFamily : Fonts.K2D_Regular,
        fontSize:Sizes._14,
        color: Colors.white
    }
})