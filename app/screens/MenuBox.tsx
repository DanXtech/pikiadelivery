import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import PikiaLogo from '@/assets/svg/pikia-logo-1.svg'; 
import CloseBar from '@/assets/svg/closeBar.svg'; 
import Notifications from '@/assets/svg/notifications.svg'; 
import Support from '@/assets/svg/support.svg'; 
import Delete from '@/assets/svg/delete.svg'; 
import Profile from '@/assets/svg/Profile.svg'; 
import Icon from 'react-native-vector-icons/FontAwesome'; // For icons
import { Ionicons } from '@expo/vector-icons'; // For the chevron down icon
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const MenuBox = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back(); // Dismiss the menu or navigate back
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <PikiaLogo width={wp('20%')} height={hp('5%')} />
        </View>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <CloseBar/>
          {/* <Text style={styles.closeText}>X</Text> */}
        </TouchableOpacity>
      </View>

      <View style={styles.menuContent}>
        {/* Action Items */}
        <View style={styles.menuSection}>
          <Link href={"/screens/notification-time"} asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Notifications/>
            <Text style={styles.menuItemText}>Notification</Text>
          </TouchableOpacity>
          </Link>
          <Link href={"/screens/support/CreateTicket"} asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Support/>
            <Text style={styles.menuItemText}>Support</Text>
          </TouchableOpacity>
          </Link>
          <Link href={"/(auth)/signin"} asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Delete/>
            <Text style={styles.menuItemText}>Delete Account</Text>
          </TouchableOpacity>
          </Link>
         
          <Link href={"/settings/accountSetting"} asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Profile/>
            <Text style={styles.menuItemText}>Account Details</Text>
          </TouchableOpacity>
          </Link>
          <Link href={"/screens/SignUpWithOutVendor"} asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name='lock-open' size={24}/>
            <Text style={styles.menuItemText}>SignUp without Vender</Text>
          </TouchableOpacity>
          </Link>
         
        </View>

        {/* Settings Section */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Language</Text>
            <View style={styles.dropdown}>
              <Text style={styles.dropdownText}>English (USA)</Text>
              <Ionicons name="chevron-down" size={hp('2%')} color="#4A90E2" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>State</Text>
            <View style={styles.dropdown}>
              <Text style={styles.dropdownText}>Texas</Text>
              <Ionicons name="chevron-down" size={hp('2%')} color="#4A90E2" />
            </View>
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>About Pikia Driver</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Terms and condition</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Piracy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Faq</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('5%'),
  },
  logoContainer: {
    flex: 1,
  },
  closeButton: {
    padding: wp('2%'),
  },
  closeText: {
    fontSize: hp('2.5%'),
    color: '#000',
    fontWeight: 'bold',
  },
  menuContent: {
    padding: wp('5%'),
  },
  menuSection: {
    marginBottom: hp('3%'),
  },
  sectionTitle: {
    fontSize: hp('2.2%'),
    fontWeight: '600',
    color: '#333',
    marginBottom: hp('2%'),
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp('2%'),
    alignItems: 'center',
    paddingVertical: hp('1.5%'),

  },
  menuItemText: {
    fontSize: hp('2%'),
    color: '#333',
    flex: 1,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: hp('2%'),
    color: '#333',
    marginRight: wp('2%'),
  },
});