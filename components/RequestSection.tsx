import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import ReduestChect from '@/assets/svg/Check.svg';
import ReduestCancel from '@/assets/svg/Cancel.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { requests as initialRequests } from '../data/db'; // Import initial data
import { useNavigation } from '@react-navigation/native'; // Assuming React Navigation
import { Request } from '@/types/type';
import { router } from 'expo-router';

const RequestSection: React.FC = () => {
  const tabBarHeight = hp('12%');
  const [loading, setLoading] = useState<boolean>(true);
  const [requests, setRequests] = useState<Request[]>(initialRequests); // Local state for requests
  const opacityAnim = new Animated.Value(1);
  const navigation = useNavigation(); // Navigation hook

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          setLoading(false);
        });
      }, 2000); // Simulate 2-second loading time
    };

    fetchData();
  }, []);

  // Skeleton loading UI
  const SkeletonUI = () => (
    <Animated.View style={[styles.listBoxD, { opacity: opacityAnim }]}>
      <Text style={styles.requestTitle}>Searching...</Text>
      <View style={styles.skeletonCard}>
        <View style={styles.locationPair}>
          <View style={styles.textInfo}>
            <View style={styles.skeletonLine} />
            <View style={styles.skeletonLine} />
            <View style={[styles.skeletonLine, styles.skeletonShort]} />
          </View>
        </View>
      </View>

      <View style={styles.progressContiner}>
        <View style={styles.skeletonProgress} />
      </View>

      <View style={styles.skeletonCard}>
        <View style={styles.locationPair}>
          <View style={styles.textInfo}>
            <View style={styles.skeletonLine} />
            <View style={styles.skeletonLine} />
            <View style={[styles.skeletonLine, styles.skeletonShort]} />
          </View>
        </View>
      </View>

      <View style={styles.progressContiner}>
        <View style={styles.skeletonProgress} />
        <View style={styles.skeletonProgressText} />
      </View>
    </Animated.View>
  );

  // Handle delete action
  // const handleDelete = (requestId: number) => {
  //   // Navigate to Accept/Reject page with the request ID
  //   navigation.navigate('AcceptReject', { requestId });
  // };
  const handleDelete = (requestId: number) => {
    // Navigate to Accept/Reject page with the request ID
    router.replace("/screens/DriverAcceptRejectScreen")
  };

  // Render a single request card
  const renderRequestCard = (request: Request) => (
    <View key={request.id}>
      <View style={styles.requestCard}>
        <View style={styles.locationPair}>
          <View style={styles.textInfo}>
            <Text style={styles.locationText}>{request.pickupLocation}</Text>
            <Text style={styles.locationText}>{request.dropoffLocation}</Text>
            <Text style={styles.locationLenght}>{request.distance}</Text>
          </View>
          <TouchableOpacity style={styles.declineReduest} onPress={() => handleDelete(request.id)}>
            <ReduestCancel />
          </TouchableOpacity>
          <TouchableOpacity style={styles.declineButton}>
            <ReduestChect />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progressContiner}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${request.progress}%` }]} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.onlineBox, { height: hp('55%') - tabBarHeight }]}>
      {loading ? (
        <SkeletonUI />
      ) : (
        <View style={styles.listBoxD}>
          <Text style={styles.requestTitle}>Request</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Map over the requests data to render cards */}
            {requests.map((request) => renderRequestCard(request))}

            <Text style={styles.progressText}>
              You might have to wait a little longer to get more requests.
            </Text>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default RequestSection;

const styles = StyleSheet.create({
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
  requestTitle: {
    marginVertical: hp('2%'),
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  listBoxD: {
    marginTop: 15,
    flexDirection: 'column',
    gap: 5,
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
    paddingLeft: hp('3%'),
  },
  locationText: {
    fontSize: hp('2%'),
    color: '#555555',
    marginVertical: hp('0.5%'),
  },
  locationLenght: {
    fontSize: hp('1.5%'),
  },
  declineReduest: {
    backgroundColor: '#FFE2E2',
    padding: 5,
    borderRadius: 10,
  },
  declineButton: {
    backgroundColor: '#FFE2E2',
    padding: 5,
    borderRadius: 10,
  },
  progressContiner: {
    paddingHorizontal: hp('2%'),
    paddingBottom: hp('3%'),
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
    backgroundColor: '#E9F7ED',
    borderRadius: wp('100%'),
  },
  progressText: {
    fontSize: hp('2%'),
    marginTop: hp('0.5%'),
    textAlign: 'left',
    color: 'white',
    paddingHorizontal: hp('3%'),
    paddingBottom: hp('10%'),
  },
  skeletonCard: {
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
  skeletonLine: {
    height: hp('2%'),
    backgroundColor: '#E6E6E6',
    borderRadius: wp('1%'),
    marginVertical: hp('0.5%'),
    width: '100%',
  },
  skeletonShort: {
    width: '60%',
  },
  skeletonProgress: {
    height: hp('1.5%'),
    width: '100%',
    backgroundColor: '#E6E6E6',
    borderRadius: wp('100%'),
  },
  skeletonProgressText: {
    height: hp('2%'),
    width: '80%',
    backgroundColor: '#E6E6E6',
    borderRadius: wp('1%'),
    marginTop: hp('1%'),
  },
});