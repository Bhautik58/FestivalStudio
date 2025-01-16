//Global imports
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "expo-router";

//File imports
import styles from "./styles";
import { Colors, Sizes } from "../../../../utils";
import ChevronLeft from "../../../../assets/svgIcons/ChevronLeft";
import { UPCOMING_FESTIVALS } from "../Home/home_data";

//Component imports
import { HeaderBackground, HomeSections } from "../../../../components";

const { container, headerContainer, row, headerTitle, scrollContainer, sectionGap } = styles;

export default function Calendar() {

    const { goBack } = useNavigation();

    const Header = () => {
        return <HeaderBackground>
            <View style={headerContainer}>
                <View style={[row, { gap: Sizes._20 }]}>
                    <TouchableOpacity hitSlop={15} onPress={() => goBack()}>
                        <ChevronLeft />
                    </TouchableOpacity>
                    <Text style={headerTitle}>Calendar</Text>
                </View>
            </View>
        </HeaderBackground>
    }

    return (
        <View style={container}>
            <Header />
            <ScrollView nestedScrollEnabled contentContainerStyle={scrollContainer}>
                <HomeSections
                    sectionTitle="January"
                    data={UPCOMING_FESTIVALS}
                />

                <View style={sectionGap}>
                    <HomeSections
                        sectionTitle="February"
                        data={UPCOMING_FESTIVALS}
                    />
                </View>

                <View style={sectionGap}>
                    <HomeSections
                        sectionTitle="March"
                        data={UPCOMING_FESTIVALS}
                    />
                </View>

                <View style={sectionGap}>
                    <HomeSections
                        sectionTitle="April"
                        data={UPCOMING_FESTIVALS}
                    />
                </View>

                <View style={sectionGap}>
                    <HomeSections
                        sectionTitle="May"
                        data={UPCOMING_FESTIVALS}
                    />
                </View>
            </ScrollView>
        </View>
    )
}