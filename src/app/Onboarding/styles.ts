//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black_22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slideContainer: {
        width: Sizes.width,
        height: '100%',
        backgroundColor: Colors.black_22,
        justifyContent: 'flex-end'
    },
    slide1Bg: {
        height: Sizes.FindSize(501.74),
        width: Sizes.FindSize(388),
        position: 'absolute',
        right: -Sizes.FindSize(39),
    },
    titleContainer: {
        paddingHorizontal: Sizes._18,
        marginBottom: Sizes.FindSize(126)
    },
    heading1Style: {
        fontSize: Sizes.FindSize(70),
        color: Colors.white,
        fontFamily: Fonts.K2D_ExtraBold,
        lineHeight: Sizes.FindSize(91)
    },
    paginationContainer: {
        paddingLeft: Sizes._25,
        paddingRight: Sizes._8,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        position: "absolute",
        bottom: -Sizes._15
    },
    dotStyle: {
        height: Sizes._10,
        width: Sizes._10,
        borderRadius: Sizes._10,
        backgroundColor: Colors.primary,
        marginHorizontal: Sizes._5
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    swipeTextContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    swipeArrow: {
        height: Sizes.FindSize(71.38),
        width: Sizes.FindSize(83.94),
        marginLeft: Sizes._10,
    },
    swipteText: {
        fontFamily: Fonts.K2D_Thin,
        fontSize: Sizes._16,
        color: Colors.primary
    },
    slide2Container: {
        width: Sizes.width,
        height: Sizes.height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide2Style: {
        height: Sizes.FindSize(328),
        width: Sizes.FindSize(242)
    },
    heading2Style: {
        fontFamily: Fonts.K2D_SemiBold,
        color: Colors.primary,
        fontSize: Sizes._30,
        marginTop: Sizes._40,
        textAlign: 'center'
    },
    subHeading2Style: {
        fontFamily: Fonts.K2D_Thin,
        color: Colors.white,
        fontSize: Sizes._12,
        marginTop: Sizes._13,
        textAlign: 'center',
    },
    slide3Style: {
        height: Sizes.FindSize(339),
        width: Sizes.FindSize(225)
    },
    heading3Style: {
        fontFamily: Fonts.K2D_SemiBold,
        color: Colors.primary,
        fontSize: Sizes._30,
        marginTop: Sizes.FindSize(54),
        textAlign: 'center'
    },
    letsGoBtn: {
        height: Sizes.FindSize(38),
        width: Sizes.FindSize(121),
        borderRadius: Sizes.FindSize(19),
        justifyContent: 'center',
        alignItems: 'center',
    },
    letsGoText: {
        fontFamily: Fonts.K2D_Bold,
        fontSize: Sizes._16,
        color: Colors.white
    },
    modalView: {
        width: Sizes.FindSize(314),
        paddingHorizontal: Sizes.FindSize(17),
        backgroundColor: 'rgba(217, 217, 217, 0.1)',
        alignSelf: 'center',
        borderRadius: Sizes.FindSize(23),
        borderWidth: Sizes.FindSize(0.5),
        borderColor: '#D9D9D9',
        paddingTop: Sizes.FindSize(42),
        paddingBottom: Sizes._24,
        overflow: 'hidden',
    },
    welcomeModalText: {
        fontFamily: Fonts.K2D_Medium,
        fontSize: Sizes._40,
        color: Colors.white,
        lineHeight: Sizes.FindSize(52)
    },
    emptyCheckBox:{
        height: Sizes._20,
        width : Sizes._20,
        borderWidth: Sizes.FindSize(0.5),
        borderRadius: Sizes._4,
        borderColor: '#D9D9D9',
    },
    privaryText:{
        fontFamily: Fonts.K2D_Thin,
        fontSize: Sizes._14,
        color: Colors.white,
        lineHeight: Sizes.FindSize(16)
    },
    linkText:{
        color: Colors.blue,
        textDecorationLine : 'underline'
    },
    privaryTextContainer: { flex: 1, marginLeft: Sizes._6 },
    agreeBtn:{
        height: Sizes.FindSize(52),
        width : '70%',
        borderRadius: Sizes.FindSize(26),
        justifyContent : 'center',
        alignItems:'center',
        alignSelf : 'center'
    },
    agreeText:{
        fontFamily: Fonts.K2D_SemiBold,
        fontSize: Sizes.FindSize(23),
        color: Colors.white
    },
    checkBoxContainer:{ marginTop: Sizes._18, alignItems: 'flex-start' },
    checkBoxIcon : {height: Sizes._20, width: Sizes._20}
})