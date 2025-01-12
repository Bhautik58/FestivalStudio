//Global imports
import { ImageBackground, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

//File imports
import styles from "./styles";
import { About, Feedback, Home, Images, Privacy, Profile, Share, Star } from "../../assets";
import { Sizes } from "../../utils";

const {
    container, headerContainer, logoStyle, logoBgStyle, logoText, blurContainer,
    bodyContainer, linkContainer, linkText
} = styles;

const DRAWER_HEADER_HEIGHT = Sizes.FindSize(224);

interface NavigationLink {
    key: string;
    title: string;
    component: JSX.Element;
    navigation: () => void;
}

export default function CustomDrawer(props: any) {
    const { top } = useSafeAreaInsets();
    const { navigation: { navigate } } = props;

    const [navigationLink, setNavigationLink] = useState<NavigationLink[]>([
        { key: '1', title: 'Home', component: <Home />, navigation: () => navigate('HomeStack') },
        { key: '2', title: 'Profile', component: <Profile />, navigation: () => { } },
        { key: '3', title: 'Share App', component: <Share />, navigation: () => { } },
        { key: '4', title: 'Feedback', component: <Feedback />, navigation: () => { } },
        { key: '5', title: 'Privacy Policy', component: <Privacy />, navigation: () => { } },
        { key: '6', title: 'Rate Us', component: <Star />, navigation: () => { } },
        { key: '7', title: 'About', component: <About />, navigation: () => { } },
    ])

    //Render drawer navigation link icon
    const renderDrawerLinkIcon = (link: string) => {
        switch (link) {
            case 'Home': return <Home />;
            case 'Profile': return <Profile />;
            case 'Share App': return <Share />;
            case 'Feedback': return <Feedback />;
            case 'Privacy Policy': return <Privacy />;
            case 'Rate Us': return <Star />;
            case 'About': return <About />;
        }
    }

    // Drawer Header
    const DrawerHeader = () => {
        return (
            <View style={[headerContainer, { height: top > 0 ? DRAWER_HEADER_HEIGHT + top : DRAWER_HEADER_HEIGHT }]}>
                <ImageBackground source={Images.logo} resizeMode="contain" style={logoStyle} />
                <ImageBackground source={Images.splash_bg} style={logoBgStyle} />
                <Text style={logoText}>Festival Studio</Text>
            </View>
        )
    }

    return (
        <View style={container}>
            <BlurView
                intensity={Platform.OS === 'ios' ? 30: 70}
                tint="dark"
                experimentalBlurMethod="dimezisBlurView"
                style={blurContainer}>
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                >
                    <DrawerHeader />
                    <View style={bodyContainer}>
                        {
                            navigationLink.map((link, i) => (
                                <TouchableOpacity onPress={link.navigation} key={link.key} style={linkContainer}>
                                    {renderDrawerLinkIcon(link.title)}
                                    <Text style={linkText}>{link.title}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
            </BlurView>
        </View>
    )
}