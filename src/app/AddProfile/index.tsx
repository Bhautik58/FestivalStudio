//Global imports
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//File imports
import styles from "./styles";
import { Sizes } from "../../utils";
import {
  BussinessIcon,
  LeftArrow,
  Location,
  PhoneIcon,
  ProfileUser,
  SmsBox,
  Website,
} from "../../assets";
import {
  CustomInputField,
  HeaderBackground,
  KeyboardView,
} from "../../components";
import useAddProfile from "./useAddProfile";

const {
  container,
  backArrowContainer,
  heading,
  logoContainer,
  userIconStyle,
  updateLogoText,
  infoInputContainer,
  addProfileBtn,
  addProfileText,
  skipBtnText,
} = styles;

const AddProfile = () => {
  const {
    businessAddRef,
    businessEmailRef,
    businessWebsiteRef,
    goToNextField,
    handleBack,
    mobileNumRef,
    handleAddProfilePress,
    handleSkipPress,
  } = useAddProfile();
  return (
    <View style={container}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        {/* Top Header */}
        <HeaderBackground>
          <View style={backArrowContainer}>
            <Pressable hitSlop={Sizes._25} onPress={handleBack}>
              <LeftArrow />
            </Pressable>
            <Text style={heading}>Add Profile</Text>
          </View>
        </HeaderBackground>
        <KeyboardView scrollEnabled>
          {/* Choose Bussiness logo */}
          <View style={logoContainer}>
            <ProfileUser style={userIconStyle} />
          </View>
          <Text style={updateLogoText}>Update your business logo</Text>

          {/* User Info */}
          <View style={infoInputContainer}>
            <CustomInputField
              leftIcon={<BussinessIcon />}
              label="Business Name"
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => goToNextField(mobileNumRef)}
            />
            <CustomInputField
              ref={mobileNumRef}
              leftIcon={<PhoneIcon />}
              label="Mobile Number"
              keyboardType="number-pad"
              returnKeyType="next"
              onSubmitEditing={() => goToNextField(businessEmailRef)}
            />
            <CustomInputField
              ref={businessEmailRef}
              leftIcon={<SmsBox />}
              label="Business Email"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => goToNextField(businessWebsiteRef)}
            />
            <CustomInputField
              ref={businessWebsiteRef}
              leftIcon={<Website />}
              label="Business Website"
              returnKeyType="next"
              onSubmitEditing={() => goToNextField(businessAddRef)}
            />
            <CustomInputField
              ref={businessAddRef}
              leftIcon={<Location />}
              label="Business Address"
              returnKeyType="done"
            />
          </View>

          <TouchableOpacity
            style={addProfileBtn}
            activeOpacity={0.7}
            onPress={handleAddProfilePress}
          >
            <Text style={addProfileText}>Add Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={handleSkipPress}>
            <Text style={skipBtnText}>Skip</Text>
          </TouchableOpacity>
        </KeyboardView>
      </SafeAreaView>
    </View>
  );
};

export default AddProfile;
