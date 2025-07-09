import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Header from '@/components/Headers';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CardIcon from '../../../assets/svg/Insert MasterCard.svg';
import { EarningItem } from '@/types/type';
import { SafeAreaView } from 'react-native-safe-area-context';
import { earningsData } from '@/data/db';
import Svg, { Line } from 'react-native-svg';
import { router } from 'expo-router';

const EarningsScreen = () => {
  const renderEarningsItem = ({ item }: { item: EarningItem }) => (


    <View style={styles.cardWrapper}>
      <View style={styles.leftContainer}>
        <View style={styles.locationContainer}>
          <View style={styles.iconContainer}>

            <View style={styles.tripDot} />

            <Svg height={hp('2%')} width={wp('0.5%')}>
              <Line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#000000"
                strokeWidth={wp('0.5%')}
                strokeDasharray={[wp('0.5%'), wp('0.5%')]} // Dash length, gap length for dotted effect
              />
            </Svg>
            <View style={styles.tripEndDot} />
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.pickupAddress}>{item.pickup}</Text>
            <Text style={styles.deliveryAddress}>{item.destination}</Text>
          </View>
        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{item.date}</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.amountText}>${item.amount}</Text>
        <Text style={styles.earnedText}>{item.status}</Text>
      </View>
    </View>

  );

  const handleNext = () => {
    router.push('/screens/withdraw-earning')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Earnings" />
      <View style={styles.content}>
        {/* Delivery calculation summary */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>Total Earnings</Text>
            <Text style={styles.summaryValue}>$122.98</Text>
          </View>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>This Week</Text>
            <Text style={styles.summaryValue}>$158.00</Text>
          </View>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>Balance</Text>
            <Text style={styles.summaryValue}>$18.00</Text>
          </View>
        </View>

        {/* Withdrawn option */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.titleContent}>
            <CardIcon />
            <Text style={styles.titleText}>Withdraw Earnings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWithdrawn} onPress={handleNext}>
            <Text style={styles.buttonOPtion}>Withdraw</Text>
          </TouchableOpacity>
        </View>



        {/* Successful details */}
        <View style={styles.detailsSection}>

          <Text style={styles.titledetails}>Today</Text>

          <FlatList
            data={earningsData}
            renderItem={renderEarningsItem}
            keyExtractor={(item) => item.id}
            // contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFA', // Light background to contrast with shadow
  },
  content: {
    flex: 1,
    paddingTop: hp('10%'), // Adjust for header height
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  summaryContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  summaryBox: {
    width: wp('28%'),
  },
  summaryLabel: {
    fontSize: 12,
    color: '#747373',
    marginBottom: hp('1%'),
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: '#000',
    padding: 10,
    elevation: 3,
  },
  titleContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '400',
    fontSize: 16,
  },
  buttonWithdrawn: {
    backgroundColor: '#20B964',
    padding: hp('1.5%'),
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonOPtion: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  detailsSection: {
    marginVertical: 15,
  },
  titledetails: {
    fontSize: 16,
    fontWeight: '400',
    color: '#22B573',
  },
  cardWrapper: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  leftContainer: {
    flex: 3,
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  iconContainer: {
    width: 20,
    alignItems: 'center',
    marginRight: 10,
  },
  tripDot: {
    width: wp('4%'),
    height: wp('4%'),
    borderRadius: wp('2%'),
    backgroundColor: '#747373',
  },
  tripEndDot: {
    width: wp('4%'),
    height: wp('4%'),
    borderRadius: wp('2%'),
    borderWidth: wp('0.5%'),
    borderColor: '#747373',
    backgroundColor: 'white',
  },

  verticalLine: {
    height: 16,
    width: 1,
    backgroundColor: '#DDD',
    marginVertical: 2,
    alignSelf: 'center',
  },

  addressContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  pickupAddress: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 16,
  },
  deliveryAddress: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  timeContainer: {
    marginTop: 8,
  },
  timeText: {
    fontSize: 12,
    color: '#777',
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: wp('15%'),
  },
  amountText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00A86B',
  },
  earnedText: {
    fontSize: 12, // Increase font size
    color: '#00A86B',
    textAlign: 'center',
    paddingHorizontal: 2

  },

});

export default EarningsScreen;