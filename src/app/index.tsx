//Global imports
import { useEffect } from "react";
import { router } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

//File imports
import { Fonts, Images } from "../assets";
import { Colors, Sizes } from "../utils";

export default function Onboarding() {

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('Onboarding')
        }, 3000);

        return () => clearTimeout(timer)
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground source={Images.logo} resizeMode="contain" style={styles.logoStyle} />
            <Text style={styles.title}>Festival Studio</Text>
            <ImageBackground source={Images.splash_bg} resizeMode="stretch" style={styles.splashBgStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.black_22,
        justifyContent : 'center',
        alignItems:'center'
    },
    logoStyle:{
        height : Sizes.FindSize(122),
        width: Sizes.FindSize(212)
    },
    title:{
        fontSize : Sizes._26,
        color: Colors.white,
        marginTop : Sizes._4,
        textAlign : 'center',
        fontFamily : Fonts.K2D_SemiBold
    },
    splashBgStyle:{
        height: Sizes.FindSize(94),
        width:'100%'
    }
})