//Global imports
import React from "react";
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";

//File imports
import { Sizes } from "../../utils";

const scrollPersistTaps: Partial<KeyboardAwareScrollViewProps> = {
  keyboardShouldPersistTaps: "handled",
  keyboardDismissMode: "interactive",
};
interface IKeyboardViewProps extends KeyboardAwareScrollViewProps {
  keyboardVerticalOffset?: number;
  scrollEnabled?: boolean;
  children: React.ReactElement[] | React.ReactElement;
}

const KeyboardView = ({
  style,
  contentContainerStyle,
  scrollEnabled,
  keyboardVerticalOffset,
  children,
}: IKeyboardViewProps) => (
  <KeyboardAwareScrollView
    {...scrollPersistTaps}
    style={style}
    contentContainerStyle={contentContainerStyle}
    scrollEnabled={scrollEnabled}
    alwaysBounceVertical={false}
    extraHeight={keyboardVerticalOffset ?? Sizes._112}
  >
    {children}
  </KeyboardAwareScrollView>
);

export default KeyboardView;
