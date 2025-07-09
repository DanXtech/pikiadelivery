import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Header from '@/components/Headers';
import TaskIcon1 from '@/assets/svg/All-trip-icon.svg';
import TaskIcon2 from '@/assets/svg/trip-day.svg';
import TaskIcon3 from '@/assets/svg/complete-Icon.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'; // For star icons
import Svg, { Line } from 'react-native-svg';

const TripsScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header title="Trips" />
      <View style={styles.content}>
        {/*  Trip Section */}
        <View style={styles.section}>
          <View style={styles.tripStats}>
            <View style={styles.statCard}>
              <View style={styles.taskInfo}>
                <TaskIcon1 width={15} />
                <Text style={styles.statText}>Last Trip</Text>
              </View>
              <Text style={styles.statValue}>1 day ago</Text>
            </View>
            <View style={styles.statCard}>
              <View style={styles.taskInfo}>
                <TaskIcon2 width={15} />
                <Text style={styles.statText}>Completed</Text>
              </View>
              <Text style={styles.statValue}>20</Text>
            </View>
            <View style={styles.statCard}>
              <View style={styles.taskInfo}>
                <TaskIcon3 width={15} />
                <Text style={styles.statText}>All Trips</Text>
              </View>
              <Text style={styles.statValue}>26</Text>
            </View>
          </View>
        </View>

        {/* Users Active Trips Section */}
        <View style={styles.sectionActivities}>
          <Text style={styles.ActiveTitle}>Active</Text>


          {/* Active Trip */}
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
                      strokeDasharray={[wp('1%'), wp('1%')]} // Dash length, gap length for dotted effect
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
            <View style={styles.rating}>
              <View style={styles.stars}>
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Icon key={index} name="star" size={hp('2%')} color="#747373" />
                ))}
              </View>
              <Text style={styles.ratingText}>No Rating Yet</Text>
            </View>
          </View>


          {/* Recent Trip */}
          <View>
            <Text style={styles.recentTitle}>Recent</Text>
            <Text style={styles.titleDate}>March 12 2024</Text>
            <View>
              <View style={styles.recentDetails}>
                <View style={styles.tripContainer}>
                  <View style={styles.tripIcons}>
                    <View style={styles.tripDot} />
                    <View>
                      <Svg height={hp('5%')} width={wp('0.5%')}>
                        <Line
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="100%"
                          stroke="#000000"
                          strokeWidth={wp('0.5%')}
                          strokeDasharray={[wp('1%'), wp('1%')]} // Dash length, gap length for dotted effect
                        />
                      </Svg>
                    </View>
                    <View style={styles.tripEndDot} />
                  </View>
                  <View style={styles.tripTexts}>
                    <Text style={styles.tripText}>4 Lancaster Avenue</Text>
                    <Text style={styles.tripText}>6th Lanest Street, Texas</Text>
                  </View>
                </View>
                <View style={styles.rating}>
                  <View style={styles.stars}>
                    {[1, 2].map((_, index) => (
                      <Icon key={index} name="star" size={hp('2%')} color="#F79E1B" />
                    ))}
                    <Icon name="star-o" size={hp('2%')} color="#F79E1B" />
                    <Icon name="star-o" size={hp('2%')} color="#F79E1B" />
                    <Icon name="star-o" size={hp('2%')} color="#F79E1B" />
                  </View>
                  <Text style={styles.ratingText}>
                    <Text>3.0</Text> Rating
                  </Text>
                </View>
              </View>
              <View>
                <View style={styles.recentDetails}>
                  <View style={styles.tripContainer}>
                    <View style={styles.tripIcons}>
                      <View style={styles.tripDot} />
                      <View>
                        <Svg height={hp('5%')} width={wp('0.5%')}>
                          <Line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="100%"
                            stroke="#000000"
                            strokeWidth={wp('0.5%')}
                            strokeDasharray={[wp('1%'), wp('1%')]} // Dash length, gap length for dotted effect
                          />
                        </Svg>
                      </View>
                      <View style={styles.tripEndDot} />
                    </View>
                    <View style={styles.tripTexts}>
                      <Text style={styles.tripText}>4 Lancaster Avenue</Text>
                      <Text style={styles.tripText}>6th Lanest Street, Texas</Text>
                    </View>
                  </View>
                  <View style={styles.rating}>
                    <View style={styles.stars}>
                      {[1, 2, 3, 4].map((_, index) => (
                        <Icon key={index} name="star" size={hp('2%')} color="#F79E1B" />
                      ))}
                      <Icon name="star-o" size={hp('2%')} color="#F79E1B" />
                    </View>
                    <Text style={styles.ratingText}>
                      <Text>4.0</Text> Rating
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Recent Trip 3 (Canceled) */}
          <View style={[styles.tripDetails, styles.canceledTrip]}>
            <View style={styles.locationContainer}>
              <View style={styles.locationIcons}>
                <View style={styles.tripDot} />
                <View>
                  <Svg height={hp('5%')} width={wp('0.5%')}>
                    <Line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="100%"
                      stroke="#000000"
                      strokeWidth={wp('0.5%')}
                      strokeDasharray={[wp('1%'), wp('1%')]} // Dash length, gap length for dotted effect
                    />
                  </Svg>
                </View>
                <View style={styles.tripEndDot} />
              </View>
              <View style={styles.locationTexts}>
                <Text style={styles.locationText}>Machaveli Lane, LA</Text>
                <Text style={styles.locationText}>South Gate Ave, NC</Text>
              </View>
            </View>
            <View style={styles.rating}>
              <Text style={[styles.ratingText, styles.canceledText]}>Canceled</Text>
              <Text style={styles.ratingText}>No Rating</Text>
            </View>
          </View>

          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingTop: hp('10%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  section: {
    marginBottom: hp('3%'),
  },
  sectionActivities: {
    marginBottom: hp('1%'),
  },
  tripStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp('2%'),
  },
  statCard: {
    width: '32%',
    flexDirection: 'column',
    gap: hp('2%'),
    backgroundColor: '#E9F7ED',
    borderRadius: wp('3%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('1.5%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
  },
  statText: {
    fontSize: hp('1.8%'),
    color: '#777777',
    fontWeight: '500',
  },
  statValue: {
    fontSize: hp('2%'),
    color: '#333',
    fontWeight: '600',
  },
  ActiveTitle: {
    fontSize: hp('2.5%'),
    fontWeight: '500',
    color: '#32CD32',
    marginBottom: hp('2%'),
  },
  tripDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: wp('2%'),
    padding: wp('4%'),
    marginBottom: hp('1%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  canceledTrip: {
    backgroundColor: '#FFE6E6', // Light red for canceled trips
    marginTop: hp('2%'),
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
  locationText: {
    fontSize: hp('1.7%'),
    color: '#555555',
    marginVertical: hp('0.5%'),
  },
  rating: {
    flexDirection: 'column',
    gap: hp('0.5%'),
    alignItems: 'flex-start',
    minWidth: wp('20%'),
  },
  stars: {
    flexDirection: 'row',
    marginBottom: hp('0.5%'),
  },
  ratingText: {
    fontSize: hp('1.7%'),
    color: '#777777',
    fontWeight: '500',
  },
  recentTitle: {
    fontSize: hp('2.5%'),
    fontWeight: '500',
    color: '#1B1B1B',
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },
  titleDate: {
    fontSize: hp('2%'),
    fontWeight: '500',
    color: '#747373',
  },
  recentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: wp('2%'),
    padding: wp('4%'),
    gap: 3,
    marginTop: hp('2%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tripContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    maxWidth: wp('70%'),
  },
  tripIcons: {
    alignItems: 'center',
    marginRight: wp('2%'),
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
  tripTexts: {
    flex: 1,
  },
  tripText: {
    fontSize: hp('1.7%'),
    color: '#555555',
    marginVertical: hp('0.5%'),
  },
  canceledText: {
    color: '#E01515', // Red for canceled status
    fontWeight: '600',
  },
});

export default TripsScreen;