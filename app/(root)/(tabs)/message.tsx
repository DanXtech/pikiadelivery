import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '@/components/Headers';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Messages" />
      {/* Add messages screen content here, e.g., Judith Eze message */}
      <View style={styles.content}>
        <Text>Messages Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingTop: hp('10%'), // Adjust for header height
    // backgroundColor: '#E9F7ED', // Light green background as in screenshot
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
});

export default MessageScreen;