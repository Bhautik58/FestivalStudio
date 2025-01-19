//Global imports
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";

//File imports
import styles from "./styles";
import {
  BussinessIcon,
  EditPencil,
  FsLogo,
  Location,
  PhoneIcon,
  SmsBox,
  Website,
} from "../../assets";
import useAddProfile from "./useAddProfile";

//Component imports
import {
  CustomInputField,
  HeaderBackground,
  KeyboardView,
} from "../../components";

//Hooks imports
import useFcm from "../../hooks/useFcm";

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
  editIconContainer,
  selectedImageStyle,
} = styles;

const AddProfile = () => {
  
  const {
    businessAddRef,
    businessEmailRef,
    businessWebsiteRef,
    goToNextField,
    mobileNumRef,
    handleAddProfilePress,
    handleSkipPress,
    onEditSelectionPress,
    logoUri,
  } = useAddProfile();

  const { token } = useFcm();
  console.log(token, 'token')

  return (
    <View style={container}>
      <StatusBar barStyle={"light-content"} />

      {/* Top Header */}
      <HeaderBackground>
        <View style={backArrowContainer}>
          <Text style={heading}>Add Profile</Text>
        </View>
      </HeaderBackground>
      <KeyboardView>
        {/* Choose Bussiness logo */}
        <View style={logoContainer}>
          {logoUri ? (
            <Image source={{ uri: logoUri }} style={selectedImageStyle} />
          ) : (
            <FsLogo style={userIconStyle} />
          )}
          <TouchableOpacity
            activeOpacity={0.7}
            style={editIconContainer}
            onPress={onEditSelectionPress}
          >
            <EditPencil />
          </TouchableOpacity>
        </View>
        <Text style={updateLogoText}>Add your business detail</Text>

        {/* User Info */}
        <View style={infoInputContainer}>
          <CustomInputField
            leftIcon={<BussinessIcon />}
            placeholder="Business Name"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => goToNextField(mobileNumRef)}
          />
          <CustomInputField
            ref={mobileNumRef}
            leftIcon={<PhoneIcon />}
            placeholder="Mobile Number"
            keyboardType="number-pad"
            returnKeyType="next"
            onSubmitEditing={() => goToNextField(businessEmailRef)}
          />
          <CustomInputField
            ref={businessEmailRef}
            leftIcon={<SmsBox />}
            placeholder="Business Email"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => goToNextField(businessWebsiteRef)}
          />
          <CustomInputField
            ref={businessWebsiteRef}
            leftIcon={<Website />}
            placeholder="Business Website"
            returnKeyType="next"
            onSubmitEditing={() => goToNextField(businessAddRef)}
          />
          <CustomInputField
            ref={businessAddRef}
            leftIcon={<Location />}
            placeholder="Business Address"
            returnKeyType="done"
          />
        </View>

        <TouchableOpacity
          style={addProfileBtn}
          activeOpacity={0.7}
          onPress={handleAddProfilePress}
        >
          <Text style={addProfileText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={handleSkipPress}>
          <Text style={skipBtnText}>Skip</Text>
        </TouchableOpacity>
      </KeyboardView>
    </View>
  );
};

export default AddProfile;
