//Global imports
import { Text, View } from "react-native";

//File imports
import styles from "./styles";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";

const { } = styles;

export default function GradientText({ style, rest, children }: any) {
    return (
        <MaskedView
            maskElement={
                <Text style={style} {...rest}>
                    {children}
                </Text>
            }>
            <LinearGradient
                colors={['#FF9D2C', '#FFFFFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <Text style={[style, { opacity: 0 }]} {...rest}>
                    {children}
                </Text>
            </LinearGradient>
        </MaskedView>
    )
}

