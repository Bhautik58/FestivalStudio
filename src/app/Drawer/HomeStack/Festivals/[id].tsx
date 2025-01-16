//Global imports
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "expo-router";
import { useCallback } from "react";

//File imports
import styles from "./styles";
import { Colors, Sizes } from "../../../../utils";
import ChevronLeft from "../../../../assets/svgIcons/ChevronLeft";
import { Images } from "../../../../assets";

//Component imports
import { HeaderBackground } from "../../../../components";

const { container, headerContainer, row, headerTitle, postImageContainer, postImage,
    listContainer
 } = styles;

export default function FestivalByID() {

    const { goBack } = useNavigation();

    const Header = () => {
        return <HeaderBackground>
            <View style={headerContainer}>
                <View style={[row, { gap: Sizes._20 }]}>
                    <TouchableOpacity hitSlop={15} onPress={() => goBack()}>
                        <ChevronLeft />
                    </TouchableOpacity>
                    <Text style={headerTitle}>Festival Post</Text>
                </View>
            </View>
        </HeaderBackground>
    }

    const renderPostItems = useCallback(({ item, index }: { item: any, index: number }) => {
        return (
            <TouchableOpacity style={postImageContainer}>
                <ImageBackground source={Images.post1} resizeMode="cover" style={postImage} imageStyle={{ borderRadius: Sizes._11 }} />
            </TouchableOpacity>
        )
    }, [])

    return (
        <View style={container}>
            <Header />
            <View style={listContainer}>
                <FlatList
                    data={[
                        { key: '1' }, { key: '2' }, { key: '3' }, { key: '4' },
                        { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' },
                        { key: '9' }, { key: '10' }, { key: '11' }, { key: '12' },
                        { key: '13' }, { key: '14' }, { key: '15' }, { key: '16' },
                        { key: '17' }, { key: '18' }, { key: '19' }, { key: '20' },
                    ]}
                    keyExtractor={(item) => item.key}
                    numColumns={3}
                    contentContainerStyle={{ paddingBottom: Sizes._20, paddingHorizontal: Sizes._11 }}
                    renderItem={renderPostItems}
                />
            </View>
        </View>
    )
}