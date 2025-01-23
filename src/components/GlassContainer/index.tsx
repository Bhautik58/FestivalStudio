import React, { ReactNode } from "react";
import { View, ViewStyle, StyleProp } from "react-native";
import { BlurView } from "expo-blur";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import { Sizes } from "../../utils";

interface GlassEffectProps {
  /**Content to render inside the glass effect */
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  /**Intensity of the blur effect */
  blurIntensity?: number;
  /** Tint for the blur effect */
  blurTint?: "light" | "dark" | "default";
  gradientColors?: string[];
  gradientAngle?: number;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
}
const { blurView, container, gradient } = styles;
const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  style,
  blurIntensity = 20,
  blurTint = "light",
  gradientColors = ["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.2)"],
  gradientAngle = 110,
  borderRadius = Sizes._25,
  borderColor = "#D9D9D9",
  borderWidth = 0.5,
}) => {
  return (
    <View style={[container, style]}>
      <BlurView
        intensity={blurIntensity}
        tint={blurTint}
        style={[blurView, { borderRadius }]}
      >
        <LinearGradient
          colors={gradientColors}
          useAngle
          angle={gradientAngle}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={[gradient, { borderRadius, borderColor, borderWidth }]}
        >
          {children}
        </LinearGradient>
      </BlurView>
    </View>
  );
};

export default GlassEffect;
