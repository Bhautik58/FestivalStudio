//Global imports
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { FlashList } from "@shopify/flash-list";

//File imports
import styles from "./styles";
import { Colors, Sizes } from "../../../../utils";
import ChevronLeft from "../../../../assets/svgIcons/ChevronLeft";
import {
  Album,
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
import { BottomSheetRefProps } from "../../../../components/BottomSheet";

//Component imports
import {
  BottomSheet,
  GlassContainer,
  HeaderBackground,
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

export default function EditPoster() {
  const ref = useRef<BottomSheetRefProps>(null);
  const backgroundListRef = useRef<FlashList<any>>(null);
  const { goBack } = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState(TABS.LOGO);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const [selectedSheetTab, setSelectedSheetTab] = useState("Background");
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
                if (tab.id === TABS.BACKGROUND) {
                  onBackgroundTabPress();
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

  const BackgroundItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity key={`bgitem=${index}`} style={backgroundImageCon}>
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
          <View style={postImageContainer}></View>
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
                { key: "1" },
                { key: "2" },
                { key: "3" },
                { key: "4" },
                { key: "5" },
                { key: "6" },
                { key: "7" },
                { key: "8" },
                { key: "9" },
                { key: "10" },
                { key: "11" },
                { key: "12" },
                { key: "13" },
                { key: "14" },
                { key: "15" },
                { key: "16" },
                { key: "17" },
                { key: "18" },
                { key: "19" },
                { key: "20" },
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
                        style={[backgroundImageCon, imagePickerItemCon]}
                      >
                        <Album />
                      </TouchableOpacity>
                    );
                  }
                  return <BackgroundItem item={item} />;
                } else {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        backgroundImageCon,
                        {
                          backgroundColor:
                            "#" +
                            ((Math.random() * 0xffffff) << 0).toString(16),
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
      <Footer />
    </View>
  );
}
