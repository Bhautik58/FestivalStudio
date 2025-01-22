//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../../../utils";
import { Fonts } from "../../../../assets";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : Colors.black_22
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
        width: (Sizes.width - Sizes.FindSize(54)),
        height: (Sizes.width - Sizes.FindSize(54)),
        backgroundColor:Colors.white,
        marginHorizontal:Sizes.FindSize(27)
    },
    postImage:{
        height: '100%',
        width : '100%',
        borderRadius:Sizes._6
    },
    listContainer: {flex:1 , justifyContent:"space-between" },
    controlButtonContainer: {
        alignItems:'center',
        justifyContent:'center',
        height:Sizes._20,
        width:Sizes._20 ,
        backgroundColor: Colors.primary40,
        borderRadius:Sizes.FindSize(3)
    },
    tabItemContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    tabLabel: {
        marginTop:Sizes._5,
        fontSize:Sizes._12,
        fontFamily: Fonts.K2D_Medium,
        lineHeight:Sizes._16,
        textAlign:'center',
        color:Colors.white
    },
    layerButtonContainer: {
        alignItems:'center',
        justifyContent:'center',
        height:Sizes._24,
        width:Sizes._24,
        backgroundColor:Colors.blue,
        borderRadius:Sizes.FindSize(3),
        alignSelf:'flex-end',
        marginRight: Sizes._22,
        marginTop:Sizes._15
    },
    imageSelectorContainer:{
            height: Sizes._56,
            width: Sizes._56,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:Colors.primary40,
            borderRadius:Sizes._6
    },
    logoPickerContainer:{padding:Sizes._32 , justifyContent:'space-between'},
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
      
})