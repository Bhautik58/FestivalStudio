//Global imports
import { FlatList, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "expo-router";
import { useCallback } from "react";

//File imports
import styles from "./styles";
import { Colors, Sizes } from "../../../../utils";
import ChevronLeft from "../../../../assets/svgIcons/ChevronLeft";
import { Images } from "../../../../assets";

//Component imports
import { HeaderBackground } from "../../../../components";
import BlackSearch from "../../../../assets/svgIcons/SearchBlack";
import Close from "../../../../assets/svgIcons/Close";

const { container, headerContainer, row, headerTitle, postImageContainer, postImage,
    listContainer, searchContainer, searchView, searchInput
} = styles;

export default function Search() {

    const { goBack } = useNavigation();

    const Header = () => {
        return <HeaderBackground>
            <View style={headerContainer}>
                <View style={[row, { gap: Sizes._20 }]}>
                    <TouchableOpacity hitSlop={15} onPress={() => goBack()}>
                        <ChevronLeft />
                    </TouchableOpacity>
                    <Text style={headerTitle}>
                        <Text style={{ color: Colors.pink }}>F</Text>
                        estival
                        <Text style={{ color: Colors.gold }}>{" "}S</Text>
                        tudio
                    </Text>
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
            <View style={searchView}>
                <View style={searchContainer}>
                    <TouchableOpacity>
                        <BlackSearch />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Search"
                        style={searchInput}
                    />
                    <TouchableOpacity>
                        <Close />
                    </TouchableOpacity>
                </View>
            </View>
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