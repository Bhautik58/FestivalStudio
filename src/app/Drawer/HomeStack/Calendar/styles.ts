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
    scrollContainer :{ 
        paddingVertical: Sizes._20
    },
    sectionGap:{
        marginTop: Sizes.FindSize(27)
    }
})