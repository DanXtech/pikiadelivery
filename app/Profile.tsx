

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Link, router, Stack } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// SVG Imports
import BackArrow from "../assets/svg/arrow-down-04-sharp.svg";
import Star from "../assets/svg/Star.svg";
import Dot from "../assets/svg/dot.svg";
import CamryCar from "../assets/svg/camry_010_s 1.svg";
import { Switch } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import User from '@/assets/svg/user.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

// Default Profile Image
const DEFAULT_PROFILE_IMAGE = require('../assets/profileimage.png');

const UserProfile: React.FC = () => {
  // State to store the selected image URI
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // State to manage the availability toggle (Switch)
  const [isAvailable, setIsAvailable] = useState<boolean>(true); // Default to true (available)

  // Function to handle image picking
  const pickImage = async () => {
    try {
      // Request permission to access media library
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Square aspect ratio for circular profile
        quality: 1,
      });

      if (!result.canceled && result.assets) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
      alert("An error occurred while picking an image.");
    }
  };

  // Function to toggle availability
  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  const handleBackPress = () => {
    router.replace('/(root)/(tabs)'); // Navigate to the home page (root route)
  };



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Update Information */}
        <View style={styles.header}>
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={handleBackPress}
          >
            <BackArrow width={24} height={24} />
          </TouchableOpacity>

          {/* Profile Section */}
          <View style={styles.profileSection}>
            {/* Profile Image Container */}
            <TouchableOpacity style={styles.profileImageContainer} onPress={pickImage}>
              <Image
                source={profileImage ? { uri: profileImage } : DEFAULT_PROFILE_IMAGE}
                style={styles.profileImage}
              />

              {/* Upload Button */}
              <View style={styles.uploadButton}>
                <Text style={styles.uploadButtonText}>Upload</Text>
              </View>
            </TouchableOpacity>

            {/* User Name */}
            <Text style={styles.userName}>Tobechukwu Arusi</Text>

            {/* Status Container */}
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>Online</Text>
              <Dot />
              <Text style={styles.deliveriesText}>34 Deliveries</Text>
              <View style={styles.ratingContainer}>
                <Star />
                <Text style={styles.ratingText}>2.6</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Availability Toggle */}
        <View style={styles.availabilityContainer}>
          <Text style={styles.availabilityText}>Available for Pickup</Text>
          <Switch
            trackColor={{ false: '#D3D3D3', true: '#32CD32' }}
            thumbColor={isAvailable ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={toggleAvailability}
            value={isAvailable}
            style={styles.switch}
          />
        </View>


        {/* Car Details */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Car details</Text>
          <View style={styles.carDetailsContent}>
            <CamryCar style={styles.carImage} width={"55%"} />
            <View style={styles.carInfoContainer}>
              <View style={styles.carInfoRow}>
                <Text style={styles.carInfoLabel}>Brand</Text>
                <Text style={styles.carInfoValue}>Toyota Camry 2017</Text>
              </View>
              <View style={styles.carInfoRow}>
                <Text style={styles.carInfoLabel}>Plate number</Text>
                <Text style={styles.carInfoValue}>TEXAS 234-897</Text>
              </View>
              <View style={styles.carInfoRow}>
                <Text style={styles.carInfoLabel}>Color</Text>
                <Text style={styles.carInfoValue}>Oxblood</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Trip Info Container section*/}
        <View style={styles.tripInformation}>
          <View style={styles.infoContainer}>
            <Text style={styles.sectionTitle}>Last Trip</Text>

            <View style={styles.tripDetails}>
              <View style={styles.locationContainer}>
                <View style={styles.locationIcons}>
                  <View style={styles.startDot} />
                  <View>
                    <Svg height={hp('5%')} width={wp('0.5%')}>
                      <Line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100%"
                        stroke="#000000"
                        strokeWidth={wp('0.5%')}
                        strokeDasharray={[wp('1%'), wp('1%')]}
                      />
                    </Svg>
                  </View>
                  <View style={styles.endDot} />
                </View>

                <View style={styles.locationTexts}>
                  <Text style={styles.locationText}>4 Lancaster Avenue</Text>
                  <Text style={styles.locationText}>6th Lanest Street, Texas</Text>
                </View>
              </View>

              <View style={styles.tripInfo}>
                <Text style={styles.tripDate}>March 12, 2024</Text>
                <Text style={styles.tripAmount}>$49</Text>
              </View>
            </View>
          </View>

          {/* User Rating View */}
          <View style={styles.reviewsContainer}>
            <View style={styles.reviewsHeader}>
              <Text style={styles.sectionTitle}>Latest Reviews</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllButton}>See All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.reviewCard}>
              <View style={styles.reviewLeft}>
                <User style={styles.reviewerImage} />
                <View style={styles.reviewerInfo}>
                  <Text style={styles.reviewerName}>Judith Eze</Text>
                  <View style={styles.starsContainer}>
                    {[1, 2, 3, 4].map((_, index) => (
                      <Icon key={index} name="star" size={16} color="#F79E1B" />
                    ))}
                    <Icon name="star-o" size={16} color="#F79E1B" />
                  </View>
                </View>
              </View>
              <Text style={styles.reviewText}>"Amazing Guy!"</Text>
            </View>
          </View>
          


{/* account setting linking path  */}
         <TouchableOpacity >
         <Link href={"/settings/accountSetting"} style={styles.accountBtn}>Account Setting</Link>
         </TouchableOpacity>
          <Button
            title="LogOut"
            buttonStyle={styles.logoutBtn}
            titleStyle={styles.logoutText}
          />
        </View>
        

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  header: {
    paddingBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  profileImageContainer: {
    width: wp("30%"),
    height: wp("30%"),
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: 'white', 
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#E0E0E0',
  },
  uploadButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#D9D9D9CC',
    paddingVertical: 5,
  },
  uploadButtonText: {
    color: '#747373',
    fontSize: 12,
    fontWeight: '500',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333333',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    gap: 10,
  },
  statusText: {
    color: '#28A745',
    fontWeight: '600',
  },
  deliveriesText: {
    color: '#6C757D',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#FFC107',
    fontWeight: 'bold',
  },
  availabilityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // For Android shadow
  },
  availabilityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  switch: {
    transform: [{ scale: 1.2 }], // Slightly larger switch for better visibility
  },


  carDetailsContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
    // justifyContent: "space-between"
  },
  carImage: {
    width: 20,
    height: 60,
    borderRadius: 10,
  },
  sectionContainer: {
    backgroundColor: "white",
  },
  carInfoContainer: {
    flex: 1,
    gap: 10,
  },
  carInfoRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  carInfoLabel: {
    color: '#1B1B1B',
    fontWeight: '500'
  },
  carInfoValue: {
    color: '#747373'
  },

  tripInformation: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: wp('7.5%'),
    paddingHorizontal: wp('5%'),
  },
  infoContainer: {
    paddingBottom: 10
  },


  onlineBox: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: wp('5%'),
    backgroundColor: '#22B573',
    borderTopLeftRadius: wp('7.5%'),
    borderTopRightRadius: wp('7.5%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tripContainer: {
    paddingTop: hp('3%'),
    borderTopLeftRadius: wp('5%'),
    borderTopRightRadius: wp('5%'),
  },
  // sectionTitle: {
  //   fontSize: hp('2.5%'),
  //   fontWeight: '500',
  //   color: '#32CD32',
  //   marginBottom: hp('2%'),
  // },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: '#22B573'
  },
  tripDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    width: '100%',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    maxWidth: wp('70%'),
  },
  locationIcons: {
    alignItems: 'center',
    marginRight: wp('2%'),
  },
  startDot: {
    width: wp('4%'),
    height: wp('4%'),
    borderRadius: wp('2%'),
    backgroundColor: '#32CD32',
  },
  endDot: {
    width: wp('4%'),
    height: wp('4%'),
    borderRadius: wp('2%'),
    borderWidth: wp('0.5%'),
    borderColor: '#32CD32',
    backgroundColor: 'white',
  },
  locationTexts: {
    flex: 1,
  },
  locationLenght: {
    fontSize: hp('1.5%'),
  },
  locationText: {
    fontSize: hp('2%'),
    color: '#555555',
    marginVertical: hp('0.5%'),
  },
  tripInfo: {
    alignItems: 'flex-start',
    marginLeft: wp('2%'),
    minWidth: wp('20%'),
  },
  tripDate: {
    fontSize: hp('1.8%'),
    color: '#777777',
    marginBottom: hp('0.5%'),
  },
  tripAmount: {
    fontSize: hp('2.5%'),
    color: '#32CD32',
    fontWeight: '600',
  },
  reviewsContainer: {
    // paddingTop: hp('2%'),
    // paddingBottom: hp('2%'),
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  seeAllButton: {
    fontSize: hp('2%'),
    color: '#555555',
  },
  reviewCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E9F7ED',
    borderRadius: wp('25%'),
    padding: wp('4%'),
  },
  reviewLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewerImage: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    marginRight: wp('3%'),
  },
  reviewerInfo: {
    justifyContent: 'center',
  },
  reviewerName: {
    fontSize: hp('2.2%'),
    fontWeight: '600',
    marginBottom: hp('0.5%'),
  },
  starsContainer: {
    flexDirection: 'row',
  },
  reviewText: {
    fontSize: hp('2%'),
    fontWeight: '500',
    color: '#333',
    maxWidth: wp('50%'),
  },

  accountBtn: {
      backgroundColor: "#22B573",
      paddingVertical: 15,
      borderRadius: 50,
      marginVertical: 10,
      color: Colors.white,
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center'
    },

    logoutBtn: {
      backgroundColor: 'transparent',
      paddingVertical: 15,
      borderRadius: 50,
      marginVertical: 10,
      borderWidth: 1,          // Adds border thickness
      borderColor: "#747373",  // Or any color you prefer
      // borderStyle: 'solid',  // Optional: 'solid' (default), 'dotted', or 'dashed'
    },
    logoutText: {
      color: "#747373",
      fontSize: 16,
      fontWeight: 'light',
    },


});

export default UserProfile;