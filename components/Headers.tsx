// components/Headers.tsx
import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { Text } from 'react-native';
import Menu from '@/assets/svg/menu-02.svg';
import Notification from '@/assets/svg/Notification.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SvgProps } from 'react-native-svg'; // Import SvgProps type
import { Link, router } from 'expo-router';

interface HeaderProps {
  title?: string; // Make title optional
  profileImage?: string | React.FC<SvgProps>; // Allow either string (URL/path) or SVG component
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
}

const Headers: React.FC<HeaderProps> = ({ 
  title, 
  profileImage, 
  onMenuPress: externalMenuPress, 
  onNotificationPress 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-wp('100%'))).current;

  // Animation for touch feedback
  const [menuOpacity] = useState(new Animated.Value(1));
  const [notificationOpacity] = useState(new Animated.Value(1));


  const handleMenuPress = () => {
   router.push('/screens/MenuBox')
  };

  const handleNotificationPress = () => {
    router.push('/screens/notification-time')
  };

  return (
    <>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          {profileImage ? (
            // Handle both string (URL/path) and SVG component
            typeof profileImage === 'string' ? (
              <Image 
                source={{ uri: profileImage }} 
                style={styles.profileImage}
              />
            ) : (
              <Link style={styles.profileSvgContainer} href={"/Profile"}>
                {/* Render SVG component if it's not a string */}
                {React.createElement(profileImage, {
                  width: wp('10%'),
                  height: wp('10%'),
                })}
              </Link>
            )
          ) : (
            // Display title for other pages
            <Text style={styles.headerTitle}>{title || 'Default Title'}</Text>
          )}
          <View style={styles.headerRight}>
            <TouchableOpacity 
              onPress={handleNotificationPress}
              style={styles.iconButton}
              activeOpacity={0.7} // Default opacity for touch feedback
            >
              <Animated.View style={{ opacity: notificationOpacity }}>
                <View style={styles.notificationDot} />
                <Notification width={wp('6%')} height={wp('6%')} />
              </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleMenuPress}
              style={styles.iconButton}
              activeOpacity={0.7} // Default opacity for touch feedback
            >
              <Animated.View style={{ opacity: menuOpacity }}>
                <Menu width={wp('6%')} height={wp('6%')} />
              </Animated.View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    height: hp('8%'),
  },
  headerTitle: {
    fontSize: hp('2.5%'),
    fontWeight: '600',
    color: '#333',
  },
  profileImage: {
    width: wp('10%'), // Adjust size as needed
    height: wp('10%'),
    borderRadius: wp('5%'), // Circular image
    backgroundColor: '#e0e0e0', // Fallback color if image fails to load
  },
  profileSvgContainer: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    gap: wp('4%'),
  },
  iconButton: {
    padding: wp('2%'), // Increase padding for larger touch area
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    padding: wp('1%'),
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: wp('4.6%'),
    height: wp('4.6%'),
    borderRadius: wp('50%'),
    backgroundColor: '#E01515',
    borderColor: "#fff",
    borderWidth: hp('0.3%'),
    zIndex: 1,
  },
});

export default Headers;
