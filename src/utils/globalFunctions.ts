import * as ImagePicker from 'expo-image-picker';

export const selectImageFromLibrary = async () => {
    try {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        alert("Permission to access media library is required!");
        return null;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!result.canceled) {
        return result.assets[0];
      }
    } catch (error) {
      console.error("Error selecting image:", error);
    }
    return null;
  };
  