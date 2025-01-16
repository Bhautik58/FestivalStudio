//Global import
import React, { FC, ReactNode } from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//File import
import { styles } from "./styles";

interface iHeaderBackground {
  children?: ReactNode;
}
export const HeaderBackground: FC<iHeaderBackground> = ({ children }) => {
  const { top } = useSafeAreaInsets();
  const { innerShadow, wrapper, content } = styles(top);
  return (
    <View style={wrapper}>
      <LinearGradient
        style={innerShadow}
        colors={[
          "rgba(0, 0, 0, 0.4)",
          "rgba(0, 0, 0, 0.1)",
          "rgba(0, 0, 0, 0.4)",
        ]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View style={content}>{children}</View>
      </LinearGradient>
    </View>
  );
};

export default HeaderBackground;
