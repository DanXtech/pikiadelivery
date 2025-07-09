import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack, useRouter } from 'expo-router'
import Back from '../../assets/svg/Backsection.svg';

const ShowNotification = () => {
    const router = useRouter();
  
    const handleBackPress = () => {
      router.push('/(root)/(tabs)'); // Use router.back() to go to the previous screen
    };
  
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
       
          <TouchableOpacity onPress={handleBackPress}>
            <Back />
          </TouchableOpacity>
       
        <Text style={styles.headerTitle}>Notification</Text>
      </View>

      <View style={styles.content}>

        {/* Unread Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Unread</Text>
          <View style={[styles.notificationCard, styles.unread]}>
            <View style={styles.headerStyle}>
              <Text style={styles.titleText}>Seasonal Items for .........</Text>
              <Text style={styles.timeText}>Today 12:32 PM</Text>
            </View>
            <Text style={styles.messageText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore......
            </Text>
          </View>
        </View>

        {/* Read Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Read</Text>
          <View style={[styles.notificationCard, styles.read]}>
            <View style={styles.headerStyle}>
              <Text style={styles.titleText}>Welcome to Pikia</Text>
              <Text style={styles.timeText}>Today 12:32 PM</Text>
            </View>
            <Text style={styles.messageText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore......
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ShowNotification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFA',
  },
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
  content: {
    flex: 1,
  },
  
  section: {
    marginBottom: 20,
    paddingVertical: 15
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    paddingHorizontal: 15
  },
  notificationCard: {
    padding: 15,
    // borderRadius: 8,
  },
  unread: {
    backgroundColor: "#E9F7ED",
  },
  read: {
    backgroundColor: "#F2F2F2",
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 5,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '600',
    flexShrink: 1,

  },
  timeText: {
    fontSize: 12,
    color: '#747373',
  },
  messageText: {
    fontSize: 13,
    color: "#3C3C3C",
    marginTop: 5,
  }
})
