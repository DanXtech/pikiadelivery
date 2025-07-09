// components/CustomDrawerContent.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface CustomDrawerContentProps {
  closeDrawer: () => void;
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ closeDrawer }) => {
  // Menu items with their routes
  const menuItems = [
    { name: 'Profile', route: '/(tabs)/Profile' },
    { name: 'My Trips', route: '/(tabs)/trips' },
    { name: 'Earnings', route: '/(tabs)/earnings' },
    { name: 'Reviews', route: '/(tabs)/reviews' },
    { name: 'Messages', route: '/(tabs)/message' },
    { name: 'Settings', route: '/(tabs)/settings' },
    { name: 'Help & Support', route: '/(tabs)/support' },
  ];

  return (
    <View style={styles.container}>
      {/* User profile section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Driver</Text>
        <Text style={styles.userEmail}>john.driver@example.com</Text>
      </View>

      {/* Menu items */}
      <View style={styles.menuItemsContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            style={styles.menuItem} 
            key={index}
            onPress={() => {
              // Close drawer when user navigates
              closeDrawer();
            }}
          >
            <Link href={item.route as any}>
              <Text style={styles.menuItemText}>{item.name}</Text>
            </Link>
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout button at bottom */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp('2%'),
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: hp('4%'),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('10%'),
    marginBottom: hp('1%'),
  },
  userName: {
    fontSize: hp('2.2%'),
    fontWeight: '600',
    color: '#333',
    marginBottom: hp('0.5%'),
  },
  userEmail: {
    fontSize: hp('1.8%'),
    color: '#666',
  },
  menuItemsContainer: {
    flex: 1,
    paddingTop: hp('2%'),
  },
  menuItem: {
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuItemText: {
    fontSize: hp('2%'),
    color: '#333',
  },
  logoutButton: {
    marginVertical: hp('3%'),
    paddingVertical: hp('2%'),
    backgroundColor: '#f8f8f8',
    borderRadius: wp('2%'),
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#E01515',
    fontSize: hp('2%'),
    fontWeight: '600',
  },
});

export default CustomDrawerContent;