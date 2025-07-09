import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import BackArrow from "../../assets/svg/arrow-down-04-sharp.svg";
import * as Location from "expo-location";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import PickArrow from "../../assets/svg/up-down-arrow.svg";
import SuccessCup from "../../assets/svg/successCup.svg";

const DeliveryScreen = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [route, setRoute] = useState<{ latitude: number; longitude: number }[]>([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }

      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 2000,
          distanceInterval: 10,
        },
        (newLocation) => {
          const { latitude, longitude } = newLocation.coords;
          setLocation({ latitude, longitude });
          setRoute((prevRoute) => [...prevRoute, { latitude, longitude }]);
        }
      );
    })();
  }, []);


  // Ajusting the height of the screen
  const tabBarHeight = hp('10%');

  const backPage = () => {
    router.push("/(root)/(tabs)")
  }

  const acceptPage = () => {
    router.push("/screens/Driver-transitPickUp")
  }

  

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {/* Map Section */}
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Polyline
              coordinates={[
                { latitude: 37.78825, longitude: -122.4324 },
                { latitude: 37.78525, longitude: -122.4344 },
                { latitude: 37.78325, longitude: -122.4314 },
              ]}
              strokeColor="#27AE60"
              strokeWidth={wp('1%')}
            />
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
              <View style={styles.carMarker}>
                <Ionicons name="car" size={wp('4%')} color="#000" />
              </View>
            </Marker>
            <Marker coordinate={{ latitude: 37.78325, longitude: -122.4314 }}>
              <View style={styles.destinationMarker}>
                <View style={styles.markerDot} />
              </View>
            </Marker>
          </MapView>
        </View>

        {/* Green Info Card */}
        <View style={styles.infoCard}>
          <TouchableOpacity style={styles.backButton} onPress={backPage}>
            <BackArrow width={wp('6%')} height={wp('6%')} />
          </TouchableOpacity>
          <View style={styles.addressContainer}>
            <View style={styles.addressRow}>
              <View style={styles.dotWhite} />
              <Text style={styles.addressText}>4 Lancaster Avenue</Text>
            </View>
            <View style={styles.addressRow}>
              <View style={styles.dotWhite} />
              <Text style={styles.addressText}>6th Lanest street, Texas</Text>
            </View>
            <Text style={styles.infoText}>Pickup: 10 meters away   ETA: 45 Mins</Text>
          </View>
        </View>

        {/* Bottom Section */}
        <View style={[styles.infoContainer, { height: hp('67%') - tabBarHeight }]}>
          <View style={styles.deliveryEstimate}>
            <View style={styles.delivery}>
              <Text style={styles.estimateLabel}>Delivery estimate:</Text>
              <Text style={styles.tipLabel}>Tip:</Text>
            </View>
            <View style={styles.tipSection}>
              <Text style={styles.estimateValue}>$49</Text>
              <Text style={styles.tipValue}>$0</Text>
            </View>
          </View>

          {/* Progress Section */}
          <View style={styles.ajustPickStyle}>
            <View style={styles.row}>
              <Text style={styles.label}>Pick up</Text>
              <View style={styles.arrowContainer} />
              <View style={styles.storeContainer}>
                <Text style={styles.storeLabel}>Falona store</Text>
                <Image
                  source={require('../../assets/pickup-user.jpg')}
                  style={styles.image}
                />
              </View>
            </View>

            <View style={styles.arrowLine}>
              <View style={styles.liftLine} />
              <View style={styles.arrowCircle}>
                <PickArrow width={wp('5%')} height={wp('5%')} />
              </View>
              <View style={styles.rightLine} />
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Receiver</Text>
              <View style={styles.arrowContainer} />
              <View style={styles.storeContainer}>
                <Text style={styles.storeLabel}>Judith Eze</Text>
                <Image
                  source={require('../../assets/receiver-user.png')}
                  style={styles.image}
                />
              </View>
            </View>
          </View>

          {/* Product Info with Top and Bottom Shadows */}
          <View style={styles.productInfoContainer}>
            <View style={styles.productInfo}>
              <SuccessCup width={wp('10%')} height={wp('10%')} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>Uziza Powder</Text>
                <Text style={styles.productQuantity}>+3 other items</Text>
              </View>
              <View style={styles.productDetails}>
                <Text style={styles.productName}>2kg of Powder</Text>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.acceptButton} onPress={acceptPage}>
              <Text style={styles.acceptButtonText}>ACCEPT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rejectButton} onPress={backPage}>
              <Text style={styles.rejectButtonText}>REJECT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carMarker: {
    backgroundColor: '#fff',
    padding: wp('1%'),
    borderRadius: wp('1%'),
    borderColor: '#ccc',
    borderWidth: 1,
  },
  destinationMarker: {
    padding: wp('1%'),
  },
  markerDot: {
    width: wp('3%'),
    height: wp('3%'),
    borderRadius: wp('1.5%'),
    backgroundColor: '#22B573',
  },
  infoCard: {
    position: 'absolute',
    top: hp('8%'),
    left: wp('5%'),
    right: wp('5%'),
    backgroundColor: '#22B573',
    borderRadius: wp('6%'),
    padding: wp('5%'),
    paddingBottom: hp('2%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  backButton: {
    position: 'absolute',
    top: -hp('6%'),
    left: -wp('2%'),
    borderRadius: wp('3%'),
    padding: wp('1.5%'),
  },
  addressContainer: {
    marginLeft: wp('2%'),
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  dotWhite: {
    width: wp('2%'),
    height: wp('2%'),
    borderRadius: wp('1%'),
    backgroundColor: '#fff',
    marginRight: wp('3%'),
  },
  addressText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: '500',
  },
  infoText: {
    color: '#fff',
    fontSize: wp('3.5%'),
    opacity: 0.8,
    marginLeft: wp('5%'),
  },
  infoContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: hp('2%'),
    backgroundColor: '#FBFAFA',
    borderTopLeftRadius: wp('7.5%'),
    borderTopRightRadius: wp('7.5%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  deliveryEstimate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
    paddingHorizontal: wp('5%'),
  },
  delivery: {
    flexDirection: "column",
    gap: wp("2%"),
  },
  estimateLabel: {
    fontSize: wp('4%'),
    color: '#555',
  },
  estimateValue: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#27AE60',
  },
  tipSection: {
    flexDirection: 'column',
    gap: wp("2%"),
  },
  tipLabel: {
    fontSize: wp('4%'),
    color: '#747373',
  },
  tipValue: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#27AE60',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp('0.5%'),
    paddingHorizontal: wp('2%'),
  },
  label: {
    fontSize: wp('4%'),
    fontWeight: '400',
    color: '#22B573',
    flex: 1,
  },
  arrowContainer: {
    flex: 1,
    alignItems: 'center',
  },
  arrowLine: {
    flexDirection: "row",
    alignItems: 'center',
  },
  ajustPickStyle: {
    marginVertical: hp("3%"),
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('7%'),
  },
  liftLine: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#747373',
    width: wp("20%"),
    height: 1,
  },
  rightLine: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#747373',
    width: wp("55%"),
    height: 1,
  },
  arrowCircle: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('4%'),
    backgroundColor: '#22B573',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeContainer: {
    flexDirection: 'row',
    gap: wp('5%'),
    alignItems: 'center',
  },
  storeLabel: {
    fontSize: wp('3.5%'),
    marginBottom: hp('0.5%'),
  },
  image: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('4%'),
  },
  productInfoContainer: {
    // marginHorizontal: wp('5%'),
    paddingVertical: wp("3%"),
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
  },
  productDetails: {
    marginLeft: wp('2%'),
  },
  productName: {
    fontSize: wp('4%'),
    fontWeight: '500',
    color: "#747373",
  },
  productQuantity: {
    fontSize: wp('3.5%'),
    color: '#747373',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: hp('0.5%'),
    marginBottom: hp('2%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('3%'),
    backgroundColor: "#FBFAFA"
  },
  acceptButton: {
    backgroundColor: '#22B573',
    borderRadius: wp('5%'),
    paddingVertical: hp('2%'),
    flex: 1,
    marginRight: wp('2%'),
    alignItems: 'center',
  },
  acceptButtonText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  rejectButton: {
    backgroundColor: '#E01515',
    borderRadius: wp('5%'),
    paddingVertical: hp('2%'),
    flex: 1,
    marginLeft: wp('2%'),
    alignItems: 'center',
  },
  rejectButtonText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default DeliveryScreen;