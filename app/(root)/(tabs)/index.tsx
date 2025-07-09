import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Animated, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import Profile from '@/assets/svg/Prifile.svg';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Switch } from 'react-native';
import User from '@/assets/svg/user.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useWindowDimensions } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import Headers from '@/components/Headers';
import RequestSection from '@/components/RequestSection';

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const { height: screenHeight, width: screenWidth } = useWindowDimensions(); // Get screen dimensions
  const [modalOpacity] = useState(new Animated.Value(0)); // Animation for opacity
  const [modalPosition] = useState(new Animated.Value(hp('5%'))); // Animation for position (slide up)

  const toggleOnline = () => {
    setIsOnline(!isOnline);
    if (!isOnline) {
      // Animate modal out if toggling to online
      Animated.parallel([
        Animated.timing(modalOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(modalPosition, {
          toValue: hp('5%'),
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  // Show modal animation when offline
  React.useEffect(() => {
    if (!isOnline) {
      Animated.parallel([
        Animated.timing(modalOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(modalPosition, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isOnline, modalOpacity, modalPosition]);

  // Calculate tab bar height (adjust based on your tab bar height, e.g., hp("12%") from your tab bar)
  const tabBarHeight = hp('12%');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Home Header */}
      <Headers
        profileImage={Profile} // URL or local path to profile image
        onMenuPress={() => console.log('Menu pressed')}
        onNotificationPress={() => console.log('Notification pressed')}
      />

      {/* Online/Offline Toggle with Custom Modal */}
      <View style={styles.switchBox}>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>
            {isOnline ? 'Online' : 'Offline'}
          </Text>
          <View style={styles.dotsign} />
          <Switch
            trackColor={{ false: '#D3D3D3', true: '#32CD32' }}
            thumbColor={isOnline ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={toggleOnline}
            value={isOnline}
            style={styles.switch}
          />
        </View>

        {/* Custom Modal (Animated View) */}
        {!isOnline && (
          <Animated.View
            style={[
              styles.customModal,
              {
                opacity: modalOpacity,
                transform: [{ translateY: modalPosition }],
              },
            ]}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Toggle Button to come online, so you can see Delivery request
              </Text>
            </View>
          </Animated.View>
        )}
      </View>

      {/* Map View */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

      {/* Box Delivery Date Information */}

     {/* Conditionally render the lazy-loaded RequestSection */}
     {isOnline && (
        
          <RequestSection />
       
      )}

      {!isOnline && (
        <View style={[styles.infoContainer, { height: hp('55%') - tabBarHeight }]}>
          {/* Trip Info Container */}
          <View style={styles.tripContainer}>
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
        </View>
      )}

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10,
  },
  loadingText: {
    fontSize: hp('2.5%'),
    color: '#32CD32',
    textAlign: 'center',
    marginTop: hp('25%'),
  },
  gradientHeader: {
    backgroundColor: 'white',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1.5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchBox: {
    position: 'absolute',
    top: hp('12%'),
    width: wp('90%'),
    zIndex: 15,
    marginHorizontal: wp('5%'),
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  dotsign: {
    position: 'absolute',
    top: hp('4%'),
    right: hp('10%'),
    width: wp('2%'),
    height: wp('2%'),
    borderRadius: wp('2%'),
    backgroundColor: '#32CD32',
  },
  statusText: {
    fontSize: hp('2.5%'),
    color: '#777777',
    fontWeight: '500',
    marginRight: wp('2%'),
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  profileContainer: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('4%'),
  },
  showLight: {
    position: 'absolute',
    bottom: -wp('1%'),
    left: -wp('1%'),
    backgroundColor: '#E01515',
    width: wp('4%'),
    height: wp('4%'),
    borderRadius: wp('2%'),
    borderColor: 'white',
    borderWidth: wp('0.5%'),
    zIndex: 2,
  },
  infoContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    borderTopLeftRadius: wp('7.5%'),
    borderTopRightRadius: wp('7.5%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
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
  sectionTitle: {
    fontSize: hp('2.5%'),
    fontWeight: '500',
    color: '#32CD32',
    marginBottom: hp('2%'),
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
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
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
  customModal: {
    position: 'absolute',
    top: hp('6%'),
    left: hp('0%'),
    width: wp('60%'),
    zIndex: 30,
    alignSelf: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: wp('4%'),
    borderRadius: wp('3%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: hp('2%'),
    color: '#333',
    textAlign: 'center',
  },
  requestContainer: {
    paddingTop: hp('3%'),
    borderTopLeftRadius: wp('5%'),
    borderTopRightRadius: wp('5%'),
  },
  requestCard: {
    backgroundColor: 'white', 
    borderRadius: wp('20%'), 
    padding: wp('5%'),
    marginBottom: hp('2%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  locationPair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  textInfo: {
    flexDirection: 'column',
    paddingLeft: hp('3%')
  },
  requestTitle: {
    marginTop: hp('3%'),
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  },
  listBoxD: {
    marginTop: 15,
    flexDirection: 'column',
    gap: 5
  },
  declineReduest: {
    backgroundColor: '#FFE2E2',
    padding: 5,
    borderRadius: 10
  },
  declineButton: {
    backgroundColor: '#FFE2E2',
    padding: 5,
    borderRadius: 10
  },
  progressContiner: {
    paddingHorizontal: hp('2%'),
    paddingBottom: hp("3%")
  },
  progressBar: {
    width: '100%',
    height: hp('1.5%'),
    backgroundColor: '#747373',
    borderRadius: wp('100%'),
    overflow: 'hidden',
    
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#E9F7ED', // Green fill for progress
    borderRadius: wp('100%'),
  },
  progressText: {
    fontSize: hp('2%'),
    marginTop: hp('0.5%'),
    textAlign: 'left',
    color: 'white',
    paddingHorizontal: hp('3%'),
    paddingBottom: hp('10%')
  },
  acceptText: {
    fontSize: hp('2%'),
    color: '#32CD32', // Green checkmark
    fontWeight: 'bold',
  },
  declineText: {
    fontSize: hp('2%'),
    color: '#E01515', // Red cross
    fontWeight: 'bold',
  },
});