//Global imports
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

//File imports
import styles from "./styles";
import { Colors, Sizes } from "../../../../utils";
import ChevronLeft from "../../../../assets/svgIcons/ChevronLeft";
import {
  Asterisk,
  Close,
  Layers,
  Picture,
  PlusIcon,
  Rotate,
  RotateLeft,
  RotateRight,
  Sticker,
  TextIcon,
  Tick,
} from "../../../../assets";

//Component imports
import { HeaderBackground } from "../../../../components";

const {
  container,
  headerContainer,
  row,
  headerTitle,
  postImageContainer,
  postImage,
  listContainer,
  controlButtonContainer,
  tabLabel,
  tabItemContainer,
  layerButtonContainer,
  imageSelectorContainer,
  logoPickerContainer,
  imageRemoveButton
} = styles;

const TABS = {
    LOGO: "Logo",
    BACKGROUND: "Background",
    STICKER: "Sticker",
    TEXT: "Text",
};

export default function EditPoster() {
  const { goBack } = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState(TABS.LOGO);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);

  
  const Header = React.memo(() => {
    return (
      <HeaderBackground>
        <View style={headerContainer}>
          <View style={[row, { gap: Sizes._20 }]}>
            <TouchableOpacity hitSlop={15} onPress={() => goBack()}>
              <ChevronLeft />
            </TouchableOpacity>
            <Text style={headerTitle}>Edit Template</Text>
          </View>
          <View style={[row, { gap: Sizes._12 }]}>
            <TouchableOpacity
              hitSlop={15}
              style={controlButtonContainer}
              onPress={() => {}}
            >
              <RotateRight />
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={15}
              style={controlButtonContainer}
              onPress={() => {}}
            >
              <RotateLeft />
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={15}
              style={controlButtonContainer}
              onPress={() => {}}
            >
              <Rotate />
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={15}
              style={[controlButtonContainer, { backgroundColor: Colors.blue }]}
              onPress={() => {}}
            >
              <Tick />
            </TouchableOpacity>
          </View>
        </View>
      </HeaderBackground>
    );
  });

  const Footer = React.memo(() => {
    const tabs = [
        { id: TABS.LOGO, icon: <Asterisk />, label: TABS.LOGO },
        { id: TABS.BACKGROUND, icon: <Picture />, label: TABS.BACKGROUND },
        { id: TABS.STICKER, icon: <Sticker />, label: TABS.STICKER },
        { id: TABS.TEXT, icon: <TextIcon />, label: TABS.TEXT },
      ];
    return (
      <HeaderBackground>
        <View
          style={[headerContainer, { bottom, paddingHorizontal: Sizes._32 }]}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={tabItemContainer}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
              onPress={() => setSelectedTab(tab.id)}
            >
              {React.cloneElement(tab.icon, {
                fill: selectedTab === tab.id ? Colors.primary : Colors.white,
              })}
              <Text
                style={[
                  tabLabel,
                  {
                    color:
                      selectedTab === tab.id ? Colors.primary : Colors.white,
                  },
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </HeaderBackground>
    );
  });

  const handleSelectImage = async (index: number) => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Permission to access media library is required!");
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.canceled) {
      const updatedImages = [...selectedImages];
      updatedImages[index] = result.assets[0].uri;
      setSelectedImages(updatedImages);
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages((prev) => {
      const updatedImages = [...prev];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };


  return (
    <View style={container}>
      <Header />
      <View style={listContainer}>
        <TouchableOpacity
          hitSlop={15}
          style={[layerButtonContainer]}
          onPress={() => {}}
        >
          <Layers />
        </TouchableOpacity>
        {true ? (
          <View style={postImageContainer} />
        ) : (
          <ImageBackground
            style={postImageContainer}
            source={{
              uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAACUCAMAAABREOc7AAAAIVBMVEX///////3+/+////P//vn+/+3///X//+v+//H///f//ej+884zAAABt0lEQVR4nO3X4W6DMAxGUZKQNPT9H3iO41DawSpVEDp0zy/EjGS+GvCG4d9zahynoNLoXD3/V/0o9dOURMje39S9X8+HaVmkIPcVSxoShxvcehhWLDnU7LJcc7teGHJnPsbow5zHauk41uA0CS+ihnEX/XvfXZt6C0PTKA/LemHSkcg+Z8uiXHOpMNqvrZNRhPA7DK0rRZJBvMXYajUOnY4zut/ZIoxsd5dXwrAoQo42C488Ys0jntL+viyM8gCU6S/3llcek1LVnqRYk7BBimVW5Nif0v7+6mzIcGT1+L4ua+SFEfxCtvenhFEPz+j8ADYdEsbLsvFcJG/ZbHEF3TGCxqBnJJYTGj+CfV7tixnStPIxGWw46t8rXbtSWzh6d32QxeJlWWyE4criOeka0jZRi0Qu6931QeYVW24qycq1HUYpcy/kjGbUu+vDzMvlpM/A5jI+PPb09j/MnGSnVnuo9zT/3BtFT/XLY0nj4AY7e5PEmysvFsbnPovwqgjjGWEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBVfgBeBQqg2NqFDAAAAABJRU5ErkJggg==",
            }}
          ></ImageBackground>
        )}

        {selectedTab === TABS.LOGO ? (
          <View style={[row, logoPickerContainer]}>
            {[1, 2, 3, 4].map((item, index) => {
            const uri = selectedImages[index];
            return (
              <View key={`logo=${index}`} style={imageSelectorContainer}>
                {uri ? (
                  <>
                    <Image source={{ uri }} style={postImage} />
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={imageRemoveButton}
                      onPress={() => removeImage(index)}
                    >
                      <Close/>
                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => handleSelectImage(index)}
                  >
                    <PlusIcon />
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
          </View>
        ) : (
          <View />
        )}
      </View>
      <Footer />
    </View>
  );
}
