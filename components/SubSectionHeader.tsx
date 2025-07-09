import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Back from '../assets/svg/Backsection.svg';

const SubSectionHeader = ({ title = 'Account Settings', showBack = true }) => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back(); // Use router.back() to go to the previous screen
  };

  return (
    <View style={styles.header}>
      {showBack && (
        <TouchableOpacity onPress={handleBackPress}>
          <Back />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default SubSectionHeader;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    gap: 30,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});