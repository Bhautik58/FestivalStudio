//Global imports
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

//File imports
import { Fonts } from "../assets";

export default function RootLayout() {
  //load custom font family
  const [fontsLoaded] = useFonts({
    [Fonts.K2D_Bold]: require("../assets/fonts/K2D-Bold.ttf"),
    [Fonts.K2D_BoldItalic]: require("../assets/fonts/K2D-BoldItalic.ttf"),
    [Fonts.K2D_ExtraBold]: require("../assets/fonts/K2D-ExtraBold.ttf"),
    [Fonts.K2D_ExtraBoldItalic]: require("../assets/fonts/K2D-ExtraBoldItalic.ttf"),
    [Fonts.K2D_ExtraLight]: require("../assets/fonts/K2D-ExtraLight.ttf"),
    [Fonts.K2D_ExtraLightItalic]: require("../assets/fonts/K2D-ExtraLightItalic.ttf"),
    [Fonts.K2D_Italic]: require("../assets/fonts/K2D-Italic.ttf"),
    [Fonts.K2D_Light]: require("../assets/fonts/K2D-Light.ttf"),
    [Fonts.K2D_LightItalic]: require("../assets/fonts/K2D-LightItalic.ttf"),
    [Fonts.K2D_Medium]: require("../assets/fonts/K2D-Medium.ttf"),
    [Fonts.K2D_MediumItalic]: require("../assets/fonts/K2D-MediumItalic.ttf"),
    [Fonts.K2D_Regular]: require("../assets/fonts/K2D-Regular.ttf"),
    [Fonts.K2D_SemiBold]: require("../assets/fonts/K2D-SemiBold.ttf"),
    [Fonts.K2D_SemiBoldItalic]: require("../assets/fonts/K2D-SemiBoldItalic.ttf"),
    [Fonts.K2D_Thin]: require("../assets/fonts/K2D-Thin.ttf"),
    [Fonts.K2D_ThinItalic]: require("../assets/fonts/K2D-ThinItalic.ttf"),
  });
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='Onboarding/index' />
      <Stack.Screen name='AddProfile/index' />
      <Stack.Screen name='Drawer' />
    </Stack>
  );
}
