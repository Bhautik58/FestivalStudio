//Global imports
import { Animated, FlatList, ImageBackground, ScrollView, SectionList, Text, TouchableOpacity, View } from "react-native";
import { useCallback, useRef, useState } from "react";
import { router, useNavigation } from "expo-router";

//File imports
import styles from "./styles";
import { HeaderBackground, HomeSections } from "../../../../components";
import { UPCOMING_FESTIVALS } from "./home_data";
import { Colors, Sizes } from "../../../../utils";
import { Images } from "../../../../assets";
import DrawerMenu from "../../../../assets/svgIcons/DrawerMenu";
import Calendar from "../../../../assets/svgIcons/Calendar";
import Search from "../../../../assets/svgIcons/Search";

const { container, listVerticalGap, bannerStyle, rowView, dotStyle, headerContainer,
    row, headerTitle
} = styles;

export default function Home() {
    const { toggleDrawer, navigate  } = useNavigation<any>();
    const myFlatList = useRef<FlatList | null>(null);
    const [scrollX, setScrollX] = useState(new Animated.Value(0));
    const [bannerData, setBannerData] = useState([{ key: '1' }, { key: '2' }, { key: '3' }]);

    const renderBannerItem = useCallback(({ item }: any) => {
        return (
            <ImageBackground source={Images.homeBanner} resizeMode="cover" style={bannerStyle} imageStyle={{ borderRadius: Sizes._10 }} />
        )
    },[])

    const PaginationDot = () => {
        const stepPosition = Animated.divide(scrollX, Sizes.width);

        return (
            <View style={rowView}>
                {
                    bannerData.map((item, i) => {
                        const stepColor = stepPosition.interpolate({
                            inputRange: [i - 2, i - 1, i, i + 1, i + 2],
                            outputRange: ['#4F4F4F', '#4F4F4F', Colors.white, '#4F4F4F', '#4F4F4F']
                        })
                        return <Animated.View key={`step=${i}`} style={[dotStyle, { backgroundColor: stepColor }]}></Animated.View>
                    })
                }
            </View>
        )
    }

    const Banner = useCallback(() => {
        return (
            <View style={{ width: Sizes.width, alignSelf: 'center' }}>
                <FlatList
                    data={bannerData}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.key}
                    renderItem={renderBannerItem}
                    ref={myFlatList}
                    onScroll={(event) => {
                        Animated.event(
                            [
                                { nativeEvent: { contentOffset: { x: scrollX } } }
                            ],
                            { useNativeDriver: false }
                        )(event);
                    }}
                />
                <PaginationDot />
            </View>
        )
    }, [])

    const Header = () => {
        return <HeaderBackground>
            <View style={headerContainer}>
                <View style={[row, { gap: Sizes._20 }]}>
                    <TouchableOpacity hitSlop={15} onPress={() => toggleDrawer()}>
                        <DrawerMenu />
                    </TouchableOpacity>
                    <Text style={headerTitle}>
                        <Text style={{ color: Colors.pink }}>F</Text>
                        estival
                        <Text style={{ color: Colors.gold }}>{" "}S</Text>
                        tudio</Text>
                </View>

                <View style={[row, { gap: Sizes._20 }]}>
                    <TouchableOpacity onPress={() => navigate('Calendar/index')} hitSlop={12}>
                        <Calendar />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Search/index')} hitSlop={12}>
                        <Search />
                    </TouchableOpacity>
                </View>
            </View>
        </HeaderBackground>
    }

    return (
        <View style={container}>
            <Header />

            <ScrollView
                contentContainerStyle={{ paddingVertical: Sizes._20 }}
                nestedScrollEnabled>
                <Banner />

                <View style={{ marginTop: Sizes._16 }}>
                    <HomeSections
                        sectionTitle={'Upcoming Festivals'}
                        data={UPCOMING_FESTIVALS}
                    />
                </View>

                <View style={listVerticalGap}>
                    <HomeSections
                        sectionTitle={'Happy Dhanteras'}
                        data={UPCOMING_FESTIVALS}
                    />
                </View>

                <View style={listVerticalGap}>
                    <HomeSections
                        sectionTitle={'Happy Diwali'}
                        data={UPCOMING_FESTIVALS}
                    />
                </View>

                <View style={listVerticalGap}>
                    <HomeSections
                        sectionTitle={'Happy New Year'}
                        data={UPCOMING_FESTIVALS}
                    />
                </View>
            </ScrollView>
        </View>
    )
}