//Global imports
import { Alert, TextInput } from "react-native";
import { RefObject, useRef } from "react";
import { router } from "expo-router";

const useAddProfile = () => {
  const mobileNumRef = useRef<TextInput>(null);
  const businessEmailRef = useRef<TextInput>(null);
  const businessWebsiteRef = useRef<TextInput>(null);
  const businessAddRef = useRef<TextInput>(null);

  const goToNextField = (nextRef: RefObject<TextInput>): void => {
    nextRef?.current?.focus();
  };

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleAddProfilePress = () => {
    router.replace('Drawer')
  };

  const handleSkipPress = () => {
    Alert.alert("Pending functionality");
  };
  return {
    mobileNumRef,
    businessEmailRef,
    businessWebsiteRef,
    businessAddRef,
    goToNextField,
    handleBack,
    handleAddProfilePress,
    handleSkipPress,
  };
};

export default useAddProfile;
