//Global imports
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import React, { FC } from "react";

//File imports
import styles from "./styles";

interface iSmallButton {
  label: string;
  isBoarder?: boolean;
  style?: ViewStyle;
  onPress: () => void;
}

const { background, border, container, labelStyle } = styles;
const SmallButton: FC<iSmallButton> = ({
  label,
  isBoarder,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[container, isBoarder ? border : background, style]}
    >
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SmallButton;
