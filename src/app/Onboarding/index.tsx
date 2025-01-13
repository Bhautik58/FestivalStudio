//Global imports
import { useCallback, useRef, useState } from "react";
import { Animated, FlatList, Image, ImageBackground, Platform, SafeAreaView, StatusBar, Text, Touchable, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import Modal from 'react-native-modal';
import { BlurView } from 'expo-blur';

//File imports
import styles from "./styles";
import { Images } from "../../assets";
import { Colors, Sizes } from "../../utils";

//Component imports
import { GradientText } from "../../components";
import { router } from "expo-router";

const { container, slideContainer, slide1Bg, titleContainer,
    heading1Style, paginationContainer, dotStyle, rowView, swipeTextContainer, swipeArrow, swipteText,
    slide2Container, slide2Style, heading2Style, subHeading2Style, slide3Style, heading3Style, letsGoBtn,
    letsGoText, modalView, welcomeModalText, emptyCheckBox, privaryText, linkText, privaryTextContainer,
    agreeBtn, agreeText, checkBoxContainer, checkBoxIcon
} = styles;

export default function Onboarding() {
    const { top, bottom } = useSafeAreaInsets();
    const myFlatList = useRef<FlatList | null>(null);

    const [scrollX, setScrollX] = useState(new Animated.Value(0));
    const [sliderData, setSliderData] = useState([{ key: '1' }, { key: '2' }, { key: '3' }]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [welcomeModalVisible, setWelcomeModalVisible] = useState<boolean>(false);
    const [checkBoxEnabled, setCheckBoxEnabled] = useState<boolean>(false);

    const Slide_1 = () => {
        return <View style={slideContainer}>
            <ImageBackground source={Images.slide_1_bg} resizeMode="contain" style={[slide1Bg, { top }]} />
            <View style={titleContainer}>
                <Text style={heading1Style}>Let's</Text>
                <Text style={heading1Style}>Create a</Text>
                <Text style={[heading1Style, { color: Colors.primary }]}>Brand</Text>
            </View>
        </View>
    }

    const PaginationDot = () => {
        const stepPosition = Animated.divide(scrollX, Sizes.width);

        return (
            <View style={rowView}>
                {
                    sliderData.map((item, i) => {
                        const stepColor = stepPosition.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [Colors.white, Colors.primary, Colors.white]
                        })
                        return <Animated.View key={`step=${i}`} style={[dotStyle, { backgroundColor: stepColor }]}></Animated.View>
                    })
                }
            </View>
        )
    }

    const PaginationView = (): JSX.Element => {
        return (
            <View style={[paginationContainer, {
                bottom: currentIndex != 2 ? -Sizes._15 : Sizes._32,
                alignItems: currentIndex != 2 ? 'flex-start' : 'center',
                paddingRight: currentIndex != 2 ? Sizes._8 : Sizes._22
            }]}>
                <PaginationDot />
                {
                    currentIndex != 2
                        ?
                        <View style={swipeTextContainer}>
                            <GradientText style={swipteText}>
                                Swipe
                            </GradientText>
                            <ImageBackground source={Images.swipe_arrow} resizeMode="contain" style={swipeArrow} />
                        </View>
                        :
                        <TouchableOpacity onPress={() => setWelcomeModalVisible(true)}>
                            <LinearGradient
                                colors={['#FF8008', '#FFC837']}
                                style={letsGoBtn}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            >
                                <Text style={letsGoText}>Let's Go</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                }
            </View>
        )
    }

    const Slide_2 = () => {
        return (
            <View style={slide2Container}>
                <ImageBackground source={Images.slide2} resizeMode="contain" style={slide2Style} />
                <View style={{ paddingHorizontal: Sizes._40 }}>
                    <Text style={heading2Style}>Make Perfect Poster</Text>
                    <Text style={subHeading2Style}>Select the perfect background photo for your design from our extensive catalog of design.</Text>
                </View>
            </View>
        )
    }

    const Slide_3 = () => {
        return (
            <View style={slide2Container}>
                <ImageBackground source={Images.slide3} resizeMode="contain" style={slide3Style} />
                <View style={{ paddingHorizontal: Sizes._40 }}>
                    <Text style={heading3Style}>With Edit Tools</Text>
                    <Text style={subHeading2Style}>Apply beautiful gradient or solid backgrounds for your poster canvas, with different, fonts to choose from, you can edit every single detail to your liking.</Text>
                </View>
            </View>
        )
    }

    const handleScroll = (event: any) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / Sizes.width);
        setCurrentIndex(index);
    };

    const renderSliders = useCallback(({ item, index }: any) => {
        if (index === 0) {
            return <Slide_1 />
        } else if (index === 1) {
            return <Slide_2 />
        } else {
            return <Slide_3 />
        }
    }, [])

    return (
        <View style={container}>
            <StatusBar barStyle={'light-content'} />
            <FlatList
                data={sliderData}
                keyExtractor={(item) => item.key.toString()}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={myFlatList}
                onScroll={(event) => {
                    handleScroll(event);
                    Animated.event(
                        [
                            { nativeEvent: { contentOffset: { x: scrollX } } }
                        ],
                        { useNativeDriver: false }
                    )(event);
                }}
                renderItem={renderSliders}
            />
            <PaginationView />

            <Modal
                style={{ justifyContent: 'flex-end', marginBottom: bottom > 0 ? bottom : Sizes._30 }}
                isVisible={welcomeModalVisible}>
                <BlurView 
                tint="dark"
                experimentalBlurMethod="dimezisBlurView"
                 intensity={Platform.OS === 'ios' ? 30: 70} style={modalView}>
                    <Text style={welcomeModalText}>{"Welcome\nFestival Studio"}</Text>
                    <View style={[rowView, checkBoxContainer]}>
                        <TouchableOpacity onPress={() => setCheckBoxEnabled(!checkBoxEnabled)} style={emptyCheckBox}>
                            {checkBoxEnabled && (
                                <Image source={Images.checkbox} resizeMode="contain" style={checkBoxIcon} />
                            )}
                        </TouchableOpacity>
                        <View style={privaryTextContainer}>
                            <Text style={privaryText}>By continuing, you agree to our
                                <Text style={linkText}>{" "}Privacy Policy</Text>
                                {" "}and{" "}
                                <Text style={linkText}>Terms of Use</Text>
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                    onPress={() => {
                        setWelcomeModalVisible(false)
                        router.replace('AddProfile')
                    }}
                    style={{ marginTop: Sizes.FindSize(33) }}>
                        <LinearGradient
                            colors={['#FF8008', '#FFC837']}
                            start={{ x: 0, y: 0 }} 
                            end={{ x: 1, y: 0 }}
                            style={agreeBtn}>
                            <Text style={agreeText}>I Agree</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </BlurView>
            </Modal>
        </View>
    )
}