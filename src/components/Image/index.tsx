//Global imports
import React, { FC, memo } from "react";
import { StyleProp } from "react-native";
import FastImage, {
  ImageStyle,
  ResizeMode,
  Source,
} from "react-native-fast-image";

interface iImage {
  source: Source;
  style: StyleProp<ImageStyle>;
  resizeMode?: ResizeMode;
}

export const Image: FC<iImage> = ({
  resizeMode = FastImage.resizeMode.contain,
  source,
  style,
}) => {
  return <FastImage style={style} source={source} resizeMode={resizeMode} />;
};

export default memo(Image);
