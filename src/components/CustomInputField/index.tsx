//Global imports
import React, { ForwardedRef, forwardRef } from "react";
import {
  TextInput,
  TextInputProps,
  View,
  StyleProp,
  ViewStyle,
  Text,
} from "react-native";

//File imports
import styles from "./styles";
import { Colors } from "../../utils";

interface CustomInputPropType {
  error?: string;
  touched?: boolean;
  inputContainerStyle?: StyleProp<ViewStyle>;
  leftIcon?: React.ReactNode;
}

type CustomInputFieldProps = TextInputProps & CustomInputPropType;

const {
  inputViewStyle,
  inputStyle,
  heading,
  container,
  inputIconContainer,
  errorTextStyle,
} = styles;

const CustomInputField = (
  {
    placeholder,
    onSubmitEditing,
    onChangeText,
    onBlur,
    keyboardType,
    returnKeyType,
    defaultValue,
    secureTextEntry,
    multiline = false,
    inputContainerStyle,
    editable,
    placeholderTextColor = Colors.white,
    error,
    touched,
    leftIcon,
  }: CustomInputFieldProps,
  ref: ForwardedRef<TextInput>
) => {
  return (
    <View style={[container, inputContainerStyle]}>
      <View style={inputViewStyle}>
        <View style={inputIconContainer}>{leftIcon}</View>
        <TextInput
          autoCapitalize="none"
          multiline={multiline}
          placeholder={placeholder}
          style={inputStyle}
          placeholderTextColor={placeholderTextColor}
          ref={ref}
          onSubmitEditing={onSubmitEditing}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          keyboardAppearance="default"
          editable={editable}
        />
      </View>
      {touched && error ? <Text style={errorTextStyle}>{error}</Text> : null}
    </View>
  );
};

export default forwardRef(CustomInputField);
