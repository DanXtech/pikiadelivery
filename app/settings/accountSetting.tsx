import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  LogBox,
  ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Link, router, Stack } from 'expo-router';

import DropDownOption from "../../assets/svg/arrow-down-01-sharp-green.svg";
import DropUpOption from "../../assets/svg/arrow-top-01-sharp-green.svg";
import Edit from "../../assets/svg/pencil-edit.svg";
import AddImageIcon from "../../assets/svg/image-add-01.svg"; // You'll need to create or import this
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import InVoicePay from "../../assets/svg/invoice-pay-01.svg"
import Walletpay from "../../assets/svg/wallet-pay.svg"
import { Button } from '@rneui/themed';
import { Colors } from '@/constants/Colors';
import SubSectionHeader from '@/components/SubSectionHeader';


// Suppress warnings from third-party libraries
// LogBox.ignoreLogs([
//   'Warning: Main: Support for defaultProps',
//   'Warning: CountryPicker: Support for defaultProps',
//   'Warning: Flag: Support for defaultProps',
//   'Warning: CountryModal: Support for defaultProps',
//   'Warning: AnimatedModal: Support for defaultProps',
//   'Warning: HeaderModal: Support for defaultProps',
//   'Warning: CountryFilter: Support for defaultProps',
//   'Warning: CountryList: Support for defaultProps',
//   'Warning: CountryItem: Support for defaultProps',
//   'VirtualizedLists should never be nested inside plain ScrollViews'
// ]);

const AccountSettings = () => {
  // Section expansion states
  const [isGeneralExpanded, setIsGeneralExpanded] = useState(false);
  const [isCarExpanded, setIsCarExpanded] = useState(false);
  const [isPayoutExpanded, setIsPayoutExpanded] = useState(false);
  const [isPasswordExpanded, setIsPasswordExpanded] = useState(false);

  // Editing states
  const [isGeneralEditing, setIsGeneralEditing] = useState(false);
  const [isGeneralSaved, setIsGeneralSaved] = useState(false);
  const [isCarEditing, setIsCarEditing] = useState(false);
  const [isCarSaved, setIsCarSaved] = useState(false);

  // User information
  const [userInfo, setUserInfo] = useState({
    name: 'Tobechukwu Arusi',
    address: 'Downtown Avenue Texas',
    phoneNumber: '+99 891 234 5643',
    carBrand: '',
    carModel: '',
    carColors: '',
    plateNumber: '',
  });

  const phoneInputRef = useRef(null);

  // General Settings handlers
  const handleGeneralEditClick = () => setIsGeneralEditing(true);

  const handleGeneralSaveClick = () => {
    setIsGeneralEditing(false);
    setIsGeneralSaved(true);
    // In a real app, you would save the data to backend/storage here
    setTimeout(() => setIsGeneralSaved(false), 3000); // Reset saved status after 3 seconds
  };

  // Car Settings handlers
  const handleCarEditClick = () => setIsCarEditing(true);

  const handleCarSaveClick = () => {
    setIsCarEditing(false);
    setIsCarSaved(true);
    // In a real app, you would save the data to backend/storage here
    setTimeout(() => setIsCarSaved(false), 3000); // Reset saved status after 3 seconds
  };

  const handleTextChange = (field: string, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };




  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <SubSectionHeader title="Account Settings" showBack={true} />

      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
       

        {/* General Settings Section */}
        <View style={styles.sectionContainer}>
          <TouchableOpacity
            style={styles.dropdownHeader}
            onPress={() => setIsGeneralExpanded(!isGeneralExpanded)}
          >
            <View style={styles.optionEdit}>
              <Text style={styles.headerText}>General settings</Text>
              <Text style={styles.headerSubText}>Profile, Car settings</Text>
            </View>
            {isGeneralExpanded ? <DropUpOption /> : <DropDownOption />}
          </TouchableOpacity>

          {isGeneralExpanded && (
            <View style={styles.dropdownContent}>
              {/* General Setting */}
              <View>
                <View style={styles.sectionTitleRow}>
                  <Text style={styles.settingTitle}>General Settings</Text>
                  {isGeneralEditing ? (
                    <TouchableOpacity onPress={handleGeneralSaveClick} style={styles.saveButtonContainer}>
                      <Text style={styles.saveButtonText}>Save changes</Text>
                    </TouchableOpacity>
                  ) : isGeneralSaved ? (
                    <View style={styles.saveButtonContainer}>
                      <Text style={styles.saveButtonText}>Changes saved</Text>
                    </View>
                  ) : (
                    <TouchableOpacity onPress={handleGeneralEditClick}>
                      <Edit />
                    </TouchableOpacity>
                  )}
                </View>

                <View>
                  <TextInput
                    style={styles.input}
                    value={userInfo.name}
                    onChangeText={(text) => handleTextChange('name', text)}
                    placeholderTextColor="#999"
                    editable={isGeneralEditing}
                  />
                  <TextInput
                    style={styles.input}
                    value={userInfo.address}
                    onChangeText={(text) => handleTextChange('address', text)}
                    placeholderTextColor="#999"
                    editable={isGeneralEditing}
                  />

                  {/* <View style={styles.phoneContainer}>
                  <PhoneInput
                    ref={phoneInputRef}
                    defaultValue={userInfo.phoneNumber}
                    defaultCode="US"
                    layout="first"
                    onChangeFormattedText={(text) => handleTextChange('phoneNumber', text)}
                    disabled={!isGeneralEditing}
                    withDarkTheme={false}
                    withShadow={false}
                    containerStyle={styles.phoneInputContainer}
                    textContainerStyle={styles.phoneTextContainer}
                    textInputStyle={styles.phoneTextInput}
                  />
                </View> */}
                </View>
              </View>
              {/* Car Settings Section */}
              <View>
                <View style={styles.sectionTitleRow}>
                  <Text style={styles.settingTitle}>Car Settings</Text>
                  {isCarEditing ? (
                    <TouchableOpacity onPress={handleCarSaveClick} style={styles.saveButtonContainer}>
                      <Text style={styles.saveButtonText}>Save changes</Text>
                    </TouchableOpacity>
                  ) : isCarSaved ? (
                    <View style={styles.saveButtonContainer}>
                      <Text style={styles.saveButtonText}>Changes saved</Text>
                    </View>
                  ) : (
                    <TouchableOpacity onPress={handleCarEditClick}>
                      <Edit />
                    </TouchableOpacity>
                  )}
                </View>
                <View>
                  <View>
                    <Text style={styles.uploadTitle}>Re - upload your car images</Text>
                    <Text style={styles.uploadSubtitle}>
                      <Text style={styles.requiredAsterisk}>* </Text>
                      <Text style={styles.requiredAstText}>(Upload clear images)</Text>
                    </Text>
                    <View style={styles.uploadContainer}>
                      <TouchableOpacity style={styles.uploadButton} disabled={!isCarEditing}>
                        <AddImageIcon />
                        <Text style={styles.uploadButtonText}>Add Image</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.uploadButton} disabled={!isCarEditing}>
                        <AddImageIcon />
                        <Text style={styles.uploadButtonText}>Add more</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Text style={styles.carDescriptionTitle}>Car description</Text>

                  <TextInput
                    style={styles.input}
                    value={userInfo.carBrand}
                    onChangeText={(text) => handleTextChange('carBrand', text)}
                    placeholderTextColor="#999"
                    placeholder="Car Brand"
                    editable={isCarEditing}
                  />
                  <TextInput
                    style={styles.input}
                    value={userInfo.carModel}
                    onChangeText={(text) => handleTextChange('carModel', text)}
                    placeholderTextColor="#999"
                    placeholder="Car Model"
                    editable={isCarEditing}
                  />
                  <TextInput
                    style={styles.input}
                    value={userInfo.carColors}
                    onChangeText={(text) => handleTextChange('carColors', text)}
                    placeholderTextColor="#999"
                    placeholder="Car colors"
                    editable={isCarEditing}
                  />
                  <TextInput
                    style={styles.input}
                    value={userInfo.plateNumber}
                    onChangeText={(text) => handleTextChange('plateNumber', text)}
                    placeholderTextColor="#999"
                    placeholder="Plate number"
                    editable={isCarEditing}
                  />
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Payout Settings Section */}
        <View style={styles.sectionContainer}>
          <TouchableOpacity
            style={styles.dropdownHeader}
            onPress={() => setIsPayoutExpanded(!isPayoutExpanded)}
          >
            <View style={styles.optionEdit}>
              <Text style={styles.headerText}>Payout settings</Text>
              <Text style={styles.headerSubText}>Earnings, Withdrawal & Bank settings</Text>
            </View>
            {isPayoutExpanded ? <DropUpOption /> : <DropDownOption />}
          </TouchableOpacity>

          {isPayoutExpanded && (
            <View style={styles.dropdownContent}>
              {/* Payout settings content would go here */}
              <Text style={styles.paySettingsText}>Payout settings</Text>

              <View style={styles.PayBoxSection}>
                <View style={styles.payoutOption}>
                  <View style={styles.PayIcon}>
                    <InVoicePay />
                  </View>
                  <Text style={styles.payoutText}>You have no active Payout</Text>
                  <TouchableOpacity
                    style={styles.payoutBtn}
                    onPress={() => router.replace("/settings/paymentSettings")}
                  >
                    <Text style={styles.textPay}>+ Add Payout method</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.editPay}>
                  <View style={styles.topSection}>
                    <View style={styles.walletbg}>
                      <Walletpay />
                    </View>
                    <Text style={styles.title}>Withdrawal Threshold</Text>
                  </View>
                  <View style={styles.downSection}>
                    <View style={styles.payPrice}>
                      <Text style={styles.amount}>$100</Text>
                      <Text style={styles.description}>
                        Default lowest withdrawal amount limit is $100
                      </Text>
                    </View>
                    <Edit />
                  </View>
                </View>

                <Text style={styles.paymentLocation}>if you encounter any issues on payment,
                  send us mail to Payment@pikia.com</Text>
              </View>
            </View>
          )}
        </View>


        {/* password settings section box */}
        <View style={styles.sectionContainer}>
          <TouchableOpacity
            style={styles.dropdownHeader}
            onPress={() => setIsPasswordExpanded(!isPasswordExpanded)}
          >
            <View style={styles.optionEdit}>
              <Text style={styles.headerText}>Password</Text>
              <Text style={styles.headerSubText}>Change and manage password</Text>
            </View>
            {isPasswordExpanded ? <DropUpOption /> : <DropDownOption />}
          </TouchableOpacity>

          {isPasswordExpanded && (
            <View style={styles.dropdownContent}>
              {/* Payout settings content would go here */}
              <Text style={styles.passwordTitle}>Change password</Text>

              <View style={styles.InputBox}>
                <Text style={styles.InputTitle}>Enter current Password</Text>
                <TextInput
                  style={styles.changePassword}
                  value={userInfo.carColors}
                  placeholderTextColor="#747373"
                  placeholder="New Password"
                />
                <Text style={styles.InputTitle}>Confirm Password</Text>
                <TextInput
                  style={styles.changePassword}
                  value={userInfo.carColors}
                  placeholderTextColor="#747373"
                  placeholder="Confirm Password"
                />

                <Link href={"/settings/accountSetting"} style={styles.resetBtn}>Reset</Link>
                <Button
                  title="Cant remember  Password"
                  buttonStyle={styles.remindStyle}
                  titleStyle={styles.remindText}
                />

              </View>
            </View>
          )}
        </View>


      </KeyboardAwareScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFA',
    
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  sectionContainer: {
    marginBottom: 16,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#E9F7ED",
    borderRadius: 8,
    marginBottom: 5,
  },
  optionEdit: {
    flexDirection: 'column',
    gap: 4,
  },
  headerText: {
    fontSize: 16,
    color: '#22B573',
    fontWeight: '700',
  },
  headerSubText: {
    fontSize: 14,
    color: '#747373',
  },
  dropdownContent: {
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  settingTitle: {
    color: '#22B573',
    fontWeight: '600',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#747373',
    borderRadius: 20,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
    height: 54,
    color: '#000',
  },
  phoneContainer: {
    // Isolate PhoneInput in its own View to avoid nesting issues
  },
  phoneInputContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 12,
    width: '100%',
  },
  phoneTextContainer: {
    borderRadius: 8,
    paddingVertical: 0,
    backgroundColor: '#fff',
  },
  phoneTextInput: {
    fontSize: 16,
    color: '#000',
  },
  saveButtonContainer: {
    backgroundColor: '#22B573',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginTop: 8,
    marginBottom: 4,
  },
  uploadSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  requiredAsterisk: {
    color: 'red',
  },
  requiredAstText: {
    color: "#747373"
  },
  uploadContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  uploadButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#22B573',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButtonText: {
    color: '#22B573',
    marginTop: 8,
    fontSize: 14,
  },
  carDescriptionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 12,
  },

  paySettingsText: {
    color: '#22B573',
    fontWeight: '600',
    fontSize: 16,
  },
  PayBoxSection: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 15
  },
  payoutOption: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 25
  },
  PayIcon: {
    backgroundColor: "#E9F7ED",
    width: hp('10%'),
    height: hp('10%'),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('10%')
  },
  payoutText: {
    paddingVertical: 20,
    color: '#22B573',
    fontWeight: '500'
  },
  payoutBtn: {
    backgroundColor: '#22B573',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20
  },
  textPay: {
    color: 'white',
    textAlign: 'center'
  },
  editPay: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    padding: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  walletbg: {
    backgroundColor: '#E9F7ED',
    width: wp('15%'),
    height: wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('10%')
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#22B573',
    marginLeft: 10,
  },
  downSection: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  payPrice: {
    flexDirection: 'column',
  },
  amount: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#747373',
    width: 200,

  },
  paymentLocation: {
    paddingHorizontal: 25,
    color: '#747373'
  },
  InputBox: {
    paddingVertical: 20
  },
  InputTitle: {
    color: "#747373"
  },
  passwordTitle: {
    color: '#22B573',
    fontWeight: '600',
    fontSize: 16,
  },
  changePassword: {
    borderRadius: 20,
    backgroundColor: '#FBFAFA',
    padding: 14,
    marginVertical: 12,
    fontSize: 16,
    height: 54,
    color: '#000',
  },
  resetBtn: {
    backgroundColor: "#22B573",
    paddingVertical: 15,
    borderRadius: 50,
    marginVertical: 10,
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },
  remindStyle: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#000000",

  },
  remindText: {
    color: "#747373",
    fontSize: 16,
    fontWeight: 'light',
  },
});

export default AccountSettings;