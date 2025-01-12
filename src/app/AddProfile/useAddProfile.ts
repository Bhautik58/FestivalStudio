//Global imports
import { Alert, TextInput } from "react-native";
import { RefObject, useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

const useAddProfile = () => {
  const mobileNumRef = useRef<TextInput>(null);
  const businessEmailRef = useRef<TextInput>(null);
  const businessWebsiteRef = useRef<TextInput>(null);
  const businessAddRef = useRef<TextInput>(null);
  const [logoUri, setLogoUri] = useState<string | null>(null);

  const goToNextField = (nextRef: RefObject<TextInput>): void => {
    nextRef?.current?.focus();
  };

  const onEditSelectionPress = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "We need access to your gallery to choose the image."
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setLogoUri(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong while picking the image.");
    }
  };

  const handleAddProfilePress = () => {
    router.replace("Drawer");
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
    handleAddProfilePress,
    handleSkipPress,
    onEditSelectionPress,
    logoUri,
  };
};

export default useAddProfile;
