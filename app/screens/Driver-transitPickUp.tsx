import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BackArrow from "../../assets/svg/arrow-down-04-sharp.svg";
import LocationIcon from "../../assets/svg/locationIcon.svg";
import WhiteLocationIcon from "../../assets/svg/locationIconwhite.svg";
import Svg, { Line } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const DriverTransitPickUp = () => {
  const router = useRouter();

  // Example coordinates for pickup and destination
  const [region, setRegion] = useState({
    latitude: 30.2672,  // Example coordinates (Austin, TX)
    longitude: -97.7431,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const pickupLocation = {
    latitude: 30.2672,
    longitude: -97.7431,
  };

  const destinationLocation = {
    latitude: 30.2695,
    longitude: -97.7410,
  };

  // Example route coordinates
  const routeCoordinates = [
    pickupLocation,
    { latitude: 30.2680, longitude: -97.7420 },
    { latitude: 30.2690, longitude: -97.7415 },
    destinationLocation,
  ];

  const tabBarHeight = hp('12%');

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        {/* Map Background */}
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={region}
            showsUserLocation={true}
            followsUserLocation={true}
          >
            {/* Pickup Marker */}
            <Marker
              coordinate={pickupLocation}
              title="Pickup Location"
              description="4 Lancaster Avenue"
            >
              <View style={styles.markerContainer}>
                <View style={styles.marker}>
                  <MaterialIcons name="location-on" size={24} color="#4CAF50" />
                </View>
              </View>
            </Marker>

            {/* Destination Marker */}
            <Marker
              coordinate={destinationLocation}
              title="Destination"
              description="Wayne Manor"
            >
              <View style={styles.markerContainer}>
                <View style={styles.marker}>
                  <MaterialIcons name="location-on" size={24} color="#4CAF50" />
                </View>
              </View>
            </Marker>

            {/* Route line */}
            <Polyline
              coordinates={routeCoordinates}
              strokeWidth={4}
              strokeColor="#4CAF50"
            />
          </MapView>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <BackArrow />
          </TouchableOpacity>
          <View style={styles.flex1} />
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel Trip</Text>
          </TouchableOpacity>
        </View>

        {/* Status Banner */}
        <View style={styles.statusBanner}>
          <Text style={styles.statusText}>Driving to pick up location</Text>
          <View style={styles.LocationBackgroundStyle}>
            <LocationIcon width={15} height={15} />
          </View>
        </View>

        {/* Pickup Info Card */}
        <View style={styles.pickupCard}>
          <View style={styles.dotLightOff}>

         <View style={styles.dotContainer}>
          
         <View style={styles.dotIndicator} />
         </View>
            <View>
              <Svg height={hp('2%')} width={wp('0.5%')}>
                <Line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="white"
                  strokeWidth={wp('0.5%')}
                  strokeDasharray={[wp('1%'), wp('1%')]}
                />
              </Svg>
            </View>
           

            {/* <View style={styles.dotline} /> */}

            <View style={styles.dotContainer}>
              <WhiteLocationIcon width={8} height={8} />
            </View>
          </View>
          <View style={styles.pickupInfo}>
            <Text style={styles.addressMain}>4 Lancaster Avenue</Text>
            <Text style={styles.addressSecondary}>6th Lanest street, Texas</Text>
            <View style={styles.pickupMetaInfo}>
              <Text style={styles.pickupMetaText}>Pickup: 4 meters away</Text>
              <Text style={styles.pickupMetaText}>ETA: 3 Mins</Text>
            </View>
          </View>
        </View>

        {/* Destination Tag */}
        <View style={styles.destinationMarker}>
          <View style={styles.destinationDot}>
            <MaterialIcons name="location-on" size={18} color="#4CAF50" />
          </View>
          <View style={styles.destinationInfo}>
            <Text style={styles.destinationLabel}>Destination</Text>
            <Text style={styles.destinationName}>Wayne Manor</Text>
          </View>
        </View>

        {/* Bottom White Container */}
        <View style={[styles.lastBoxInfo, { height: hp('40%') - tabBarHeight }]}>
          {/* Store Info Card with Rounded Top */}
          <View style={styles.storeCardContaner}>
            <View style={styles.storeInfoCard}>
              <View style={styles.storeInfoContent}>

                <View style={styles.storeProfile}>
                  <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                    style={styles.storeImage}
                  />

                  <View style={styles.storeTextInfo}>
                    <Text style={styles.storeName}>Falona store</Text>
                    <Text style={styles.storeAddress}>4 Lancaster Avenue</Text>
                  </View>
                </View>
                <View style={styles.contactButtons}>
                  <TouchableOpacity style={styles.contactButton}>
                    <Ionicons name="chatbubble-ellipses" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.contactButton}>
                    <Ionicons name="call" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>


          {/* Picked Up Button */}
          <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.pickedUpButton}>
              <Text style={styles.pickedUpButtonText}>I have Picked up</Text>
              <Ionicons name="chevron-forward-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DriverTransitPickUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerContainer: {
    alignItems: 'center',
  },
  marker: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 5,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  flex1: {
    flex: 1,
  },
  cancelButton: {
    backgroundColor: '#E01515',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  statusBanner: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 70,
    left: 20,
    right: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LocationBackgroundStyle: {
    backgroundColor: "#E9F7ED",
    padding: 5,
    borderRadius: 50,
  },
  statusText: {
    color: '#22B573',
    fontWeight: '600',
    fontSize: 16,
  },
  pickupCard: {
    backgroundColor: '#4CAF50',
    position: 'absolute',
    top: 180,
    left: 20,
    right: 20,
    padding: 16,
    borderRadius: 60,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingLeft: 30
  },
  dotLightOff: {
    flexDirection: 'column',
    alignItems:'center',
    gap: 3
  },
  dotContainer: {
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 15,
    height: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // White with 30% opacity
    borderRadius: 50,
  },
  dotIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    // marginBottom: 8,
  },
  LocationIconDot: {

  },
  dotline: {
  },
  LocationIconPick: {
    backgroundColor: "#D9D9D9",
    padding: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'

  },
 
  pickupInfo: {
    marginTop: 8,
  },
  addressMain: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  addressSecondary: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
    opacity: 0.9,
  },
  pickupMetaInfo: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  pickupMetaText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.9,
  },
  destinationMarker: {
    position: 'absolute',
    bottom: '35%',
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  destinationDot: {
    marginRight: 8,
  },
  destinationInfo: {},
  destinationLabel: {
    fontSize: 10,
    color: '#666',
    textTransform: 'uppercase',
  },
  destinationName: {
    fontSize: 12,
    fontWeight: '600',
  },
  lastBoxInfo: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FBFAFA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  storeCardContaner: {
    position: 'absolute',
    top: -20,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  storeProfile: {
    flexDirection: 'row',
    gap: 10
  },
  storeInfoCard: {
    backgroundColor: '#E9F7ED',
    borderRadius: 35,
    paddingVertical: 25,
    paddingHorizontal: 20
  },
  storeInfoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  storeImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  storeTextInfo: {
    // marginLeft: 12,
    // flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: '600',
  },
  storeAddress: {
    fontSize: 14,
    color: '#666',
  },
  contactButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactButton: {
    backgroundColor: '#4CAF50',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  buttonBox: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  pickedUpButton: {
    backgroundColor: '#4CAF50',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  pickedUpButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 8,
    textTransform: 'uppercase',
  },
});