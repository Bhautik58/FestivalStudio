//Global imports
import { Animated, FlatList, ImageBackground, ScrollView, SectionList, Text, TouchableOpacity, View } from "react-native";
import { useRef, useState } from "react";

//File imports
import styles from "./styles";
import { HomeSections } from "../../../../components";
import { UPCOMING_FESTIVALS } from "./home_data";
import { Colors, Sizes } from "../../../../utils";
import { Images } from "../../../../assets";

const { container, listVerticalGap, bannerStyle, rowView, dotStyle } = styles;

export default function Home() {

    const myFlatList = useRef<FlatList | null>(null);
    const [scrollX, setScrollX] = useState(new Animated.Value(0));
    const [bannerData, setBannerData] = useState([{ key: '1' }, { key: '2' }, { key: '3' }]);

    const renderBannerItem = ({ item }: any) => {
        return (
            <ImageBackground source={Images.homeBanner} resizeMode="cover" style={bannerStyle} imageStyle={{ borderRadius: Sizes._10 }} />
        )
    }

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

    const Banner = () => {
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
    }

    return (
        <View style={container}>
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