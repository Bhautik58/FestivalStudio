//Global imports
import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { FlashList } from "@shopify/flash-list";
import ColorPicker from "react-native-wheel-color-picker";

//File imports
import styles from "./styles";
import { Colors, selectImageFromLibrary, Sizes } from "../../../../utils";
import ChevronLeft from "../../../../assets/svgIcons/ChevronLeft";
import {
  Album,
  Asterisk,
  Close,
  Images,
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
import { BottomSheetRefProps } from "../../../../components/BottomSheet";

//Component imports
import {
  BottomSheet,
  GlassContainer,
  HeaderBackground,
  SmallButton,
} from "../../../../components";

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
  imageRemoveButton,
  emptyView,
  glassContainerStyle,
  backgroundImage,
  backgroundImageCon,
  bottomsheetTab,
  sheetTab,
  sheetTabBrown,
  tabLable,
  tabLableBrown,
  backgroundPostsCon,
  imagePickerItemCon,
  header,
  modalBackground,
  modalContainer,
  title,
  confirmButtonText,
  glassTextContainer,
  textInputStyle,
  textInputLabel,
  textInputButtons,
  textInputContainer,
  keyboardAvoidingContainer,
  scrollViewContent,
} = styles;

const TABS = {
  LOGO: "Logo",
  BACKGROUND: "Background",
  STICKER: "Sticker",
  TEXT: "Text",
};

const SUB_TABS = [
  { key: "Background", label: "Background" },
  { key: "Colors", label: "Color" },
];
const { height } = Dimensions.get("window");

export default function EditPoster() {
  const ref = useRef<BottomSheetRefProps>(null);
  const backgroundListRef = useRef<FlashList<any>>(null);
  const { goBack } = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState(TABS.LOGO);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const [selectedSheetTab, setSelectedSheetTab] = useState<number | string>(
    "Background"
  );
  const [isColorPickerVisible, setIsColorPickerVisible] =
    useState<boolean>(false);
  const [selectedBgImage, setSelectedBgImage] = useState<string | null>(null);
  const [color, setColor] = useState<string>(Colors.white);
  const [isTextInputVisible, setIsTextInputVisible] = useState<boolean>(false);
  const [keyboardOffset, setKeyboardOffset] = useState<number>(Sizes.FindSize(110));

  const SNAP_VALUE = 400;

  const onBackgroundTabPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
      backgroundListRef?.current?.scrollToIndex({ animated: true, index: 0 });
    } else {
      ref?.current?.scrollTo(-Sizes.FindSize(SNAP_VALUE));
    }
  }, []);

  const handleTextInputVisibility = useCallback(() => {
    setIsTextInputVisible(false);
  }, []);

  const onAddTextPress = useCallback(() => {
    alert('Pending Functionality')
    handleTextInputVisibility()
  }, [handleTextInputVisibility]);

  const handleColorPickerPress = () => {
    setIsColorPickerVisible(true);
  };

  const closeModal = () => {
    setIsColorPickerVisible(false);
    onBackgroundTabPress();
  };

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
              onPress={() => {
                setSelectedTab(tab.id);
                if (tab.id === TABS.TEXT) {
                  if (isTextInputVisible) {
                    setIsTextInputVisible(false);
                  } else {
                    setIsTextInputVisible(true);
                  }
                }
                if (tab.id === TABS.BACKGROUND) {
                  onBackgroundTabPress();
                } else {
                  if (ref?.current?.isActive()) {
                    onBackgroundTabPress();
                  }
                }
              }}
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

  const onColorChange = (color: any) => {
    setSelectedBgImage(null);
    setColor(color);
  };

  const onStaticColorSelection = (color: string) => {
    setSelectedBgImage(null);
    setColor(color);
    onBackgroundTabPress();
  };

  const onBgItemPress = (url: string) => {
    setSelectedBgImage(url);
    onBackgroundTabPress();
  };

  const onAlbumItemPress = async () => {
    const result = await selectImageFromLibrary();
    if (result?.uri) {
      setSelectedBgImage(result?.uri);
    }
    onBackgroundTabPress();
  };
  const BackgroundItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        key={`bgitem=${index}`}
        style={backgroundImageCon}
        onPress={() => onBgItemPress(item?.color)}
      >
        <Image
          source={{
            uri:
              item?.uri ??
              "https://cdn.vectorstock.com/i/1000x1000/70/42/happy-diwali-poster-with-decorative-lantern-vector-44017042.webp",
          }}
          style={backgroundImage}
        />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    const keyboardShowEvent =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const keyboardHideEvent =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const keyboardShowListener = Keyboard.addListener(
      keyboardShowEvent,
      (event) => {
        setKeyboardOffset(0);
      }
    );

    const keyboardHideListener = Keyboard.addListener(keyboardHideEvent, () => {
      setKeyboardOffset(Sizes.FindSize(110));
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

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
        {selectedBgImage != null ? (
          <ImageBackground
            style={[postImageContainer]}
            source={{
              uri: selectedBgImage,
            }}
          ></ImageBackground>
        ) : (
          <View style={[postImageContainer, { backgroundColor: color }]}></View>
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
                        <Close />
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
          <View style={emptyView} />
        )}
      </View>
      {isTextInputVisible && (
        <Modal visible={isTextInputVisible} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={handleTextInputVisibility}>
            <View style={modalBackground}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={keyboardAvoidingContainer}
              >
                <ScrollView
                  contentContainerStyle={scrollViewContent}
                  keyboardShouldPersistTaps="handled"
                >
                  <View
                    style={[glassTextContainer, { bottom: keyboardOffset }]}
                  >
                    <GlassContainer borderRadius={Sizes._10} borderWidth={0}>
                      <View style={textInputContainer}>
                        <Text style={textInputLabel}>Add Text</Text>
                        <TextInput
                          autoCapitalize="none"
                          autoCorrect={false}
                          multiline={true}
                          placeholder={"Enter Text"}
                          style={textInputStyle}
                          placeholderTextColor={Colors.white}
                        />
                      </View>
                      <View style={textInputButtons}>
                        <SmallButton
                          label="Cancel"
                          isBoarder
                          style={{ marginHorizontal: Sizes._7 }}
                          onPress={handleTextInputVisibility}
                        />
                        <SmallButton
                          label="Add"
                          style={{ marginHorizontal: Sizes._7 }}
                          onPress={onAddTextPress}
                        />
                      </View>
                    </GlassContainer>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}

      <BottomSheet ref={ref}>
        <View style={glassContainerStyle}>
          <GlassContainer>
            <View style={bottomsheetTab}>
              {SUB_TABS.map((tab) => (
                <TouchableOpacity
                  key={tab.key}
                  style={[
                    sheetTab,
                    selectedSheetTab === tab.key && sheetTabBrown,
                  ]}
                  onPress={() => {
                    backgroundListRef?.current?.scrollToIndex({
                      animated: true,
                      index: 0,
                    });
                    setSelectedSheetTab(tab.key);
                  }}
                >
                  <Text
                    style={[
                      tabLable,
                      selectedSheetTab === tab.key && tabLableBrown,
                    ]}
                  >
                    {tab.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <FlashList
              ref={backgroundListRef}
              data={[
                { key: "header", isHeader: true },
                { key: "1", color: "#FF5733" },
                { key: "2", color: "#FFC300" },
                { key: "3", color: "#DAF7A6" },
                { key: "4", color: "#C70039" },
                { key: "5", color: "#900C3F" },
                { key: "6", color: "#581845" },
                { key: "7", color: "#4CAF50" },
                { key: "8", color: "#2196F3" },
                { key: "9", color: "#03A9F4" },
                { key: "10", color: "#00BCD4" },
                { key: "11", color: "#009688" },
                { key: "12", color: "#FF9800" },
                { key: "13", color: "#F44336" },
                { key: "14", color: "#E91E63" },
                { key: "15", color: "#9C27B0" },
                { key: "16", color: "#673AB7" },
                { key: "17", color: "#3F51B5" },
                { key: "18", color: "#8BC34A" },
                { key: "19", color: "#CDDC39" },
                { key: "20", color: "#FFEB3B" },
                { key: "21", color: "#FFC107" },
                { key: "22", color: "#FF5722" },
                { key: "23", color: "#795548" },
                { key: "24", color: "#9E9E9E" },
                { key: "25", color: "#607D8B" },
                { key: "26", color: "#FFFFFF" },
                { key: "27", color: "#F5F5F5" },
                { key: "28", color: "#EEEEEE" },
                { key: "29", color: "#000000" },
                { key: "30", color: "#424242" },
              ]}
              numColumns={4}
              showsVerticalScrollIndicator
              indicatorStyle="white"
              contentContainerStyle={backgroundPostsCon}
              keyExtractor={(item) => item.key}
              ListFooterComponent={<View style={{ height: SNAP_VALUE + 50 }} />}
              renderItem={({ item }) => {
                if (selectedSheetTab === SUB_TABS[0].key) {
                  if (item.isHeader) {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={onAlbumItemPress}
                        style={[backgroundImageCon, imagePickerItemCon]}
                      >
                        <Album />
                      </TouchableOpacity>
                    );
                  }
                  return <BackgroundItem item={item} />;
                } else {
                  if (item.isHeader) {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handleColorPickerPress}
                      >
                        <Image
                          source={Images.ColorPickerIcon}
                          resizeMode="contain"
                          style={backgroundImageCon}
                        />
                      </TouchableOpacity>
                    );
                  }
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => onStaticColorSelection(item.color)}
                      style={[
                        backgroundImageCon,
                        {
                          backgroundColor: item.color,
                        },
                      ]}
                    />
                  );
                }
              }}
            />
          </GlassContainer>
        </View>
      </BottomSheet>
      <Modal
        visible={isColorPickerVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <Pressable style={modalBackground} onPressOut={closeModal}>
          <View
            style={[modalContainer, { height: height / 2 + 50 }]}
            onStartShouldSetResponder={(e) => true}
            onResponderTerminationRequest={() => false}
          >
            <View style={header}>
              <Text style={title}>Pick a Color</Text>
              <Pressable onPress={closeModal}>
                <Text style={[confirmButtonText]}>Confirm</Text>
              </Pressable>
            </View>
            <ColorPicker
              color={color}
              onColorChangeComplete={(color) => onColorChange(color)}
              thumbSize={30}
              sliderSize={30}
              noSnap={true}
              row={false}
            />
          </View>
        </Pressable>
      </Modal>
      <Footer />
    </View>
  );
}
