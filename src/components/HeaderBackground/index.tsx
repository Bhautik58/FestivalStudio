//Global import
import React, { FC, ReactNode } from "react";
import FastImage from "react-native-fast-image";

//File import
import { Images } from "../../assets";
import styles from "./styles";

interface iHeaderBackground {
  children?: ReactNode;
}
const { container } = styles;
export const HeaderBackground: FC<iHeaderBackground> = ({
  children
}) => {
  return (
    <FastImage source={Images.headerBg} style={container}>
      {children}
    </FastImage>
  );
};

export default HeaderBackground;
