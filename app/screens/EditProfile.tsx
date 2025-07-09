import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Stack, router } from 'expo-router';
import Pikia from '@/assets/svg/pikia-logo-1.svg';
import { Colors } from '@/constants/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Placeholder for the add photo icon
const AddPhotoIcon = () => (
  <View style={styles.addIcon}>
    <Text style={styles.addIconText}>+</Text>
  </View>
);

const EditProfile = () => {
  const [photo, setPhoto] = useState<string | null>(null);

  // Placeholder function for handling photo selection
  const handleAddPhoto = () => {
    // Implement photo selection logic here (e.g., using react-native-image-picker)
    console.log('Add photo pressed');
  };

  // Handle the Finish button
  const handleFinish = () => {
    // Navigate to the desired screen after finishing
    router.push('/(root)/(tabs)');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.containerHeader}>
        <Pikia />
        <Text style={styles.logoTitle}>
          <Text style={styles.textLogo}>Driver</Text>
          <Text style={styles.dotText}>.</Text>
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Almost Done</Text>
        <TouchableOpacity style={styles.photoContainer} onPress={handleAddPhoto}>
          {photo ? (
            <View style={styles.photoPlaceholder} />
          ) : (
            <>
              <View style={styles.photoPlaceholder}>
                <View style={styles.cameraIcon}>
                  <Text style={styles.cameraIconText}>📷</Text>
                </View>
              </View>
              <AddPhotoIcon />
            </>
          )}
        </TouchableOpacity>
        <Text style={styles.description}>Add a clear photo of yourself</Text>
        <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
          <Text style={styles.finishButtonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    paddingBottom: hp('2%'),
  },
  containerHeader: {
    paddingBottom: hp('3%'),
    paddingTop: hp('2%'),
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoTitle: {
    color: Colors.btnColor,
  },
  textLogo: {
    fontSize: wp('4.5%'),
    fontWeight: '400',
  },
  dotText: {
    fontSize: wp('5%'),
    fontWeight: '700',
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: '500',
    color: Colors.btnColor,
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
  },
  photoContainer: {
    position: 'relative',
    marginBottom: hp('3%'),
  },
  photoPlaceholder: {
    width: wp('40%'),
    height: wp('40%'),
    borderRadius: wp('20%'),
    borderWidth: 2,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  cameraIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIconText: {
    fontSize: wp('10%'),
    color: '#A9A9A9',
  },
  addIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIconText: {
    fontSize: wp('8%'),
    color: 'white',
  },
  description: {
    fontSize: wp('4.5%'),
    color: '#000',
    marginBottom: hp('5%'),
  },
  finishButton: {
    backgroundColor: Colors.btnColor,
    width: '100%',
    paddingVertical: hp('2%'),
    borderRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('2%'),
  },
  finishButtonText: {
    color: 'white',
    fontSize: wp('4.5%'),
    fontWeight: '500',
  },
});