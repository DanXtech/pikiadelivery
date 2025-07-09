import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { 
  heightPercentageToDP as hp,
  widthPercentageToDP as wp 
} from 'react-native-responsive-screen';
import { UserRating } from './StarRating';

export interface ReviewItemType {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: any;
  date: string;
}

interface ReviewItemProps {
  item: ReviewItemType;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ item }) => {
  return (
    <View key={item.id} style={styles.reviewSection}>
      {/* Rating Score User Profile */}
      <View style={styles.reviewContent}>
        <item.avatar source={item.avatar} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <UserRating rating={item.rating} />
        </View>
      </View>

      {/* User Comment Section */}
      <View style={styles.reviewCommentContainer}>
        <Text style={styles.reviewComment}>{item.comment}</Text>
      </View>

      {/* Rating Number Section */}
      <View>
        <Text style={[styles.reviewRating, {
          color: item.rating >= 3 ? '#1DB578' : '#FF4D4D',
        }]}>
          {item.rating.toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E8F5EF',
    marginHorizontal: hp('2%'),
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('7.5%'),
    marginVertical: hp('1%'),
  },
  reviewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
  },
  avatar: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#333',
  },
  reviewCommentContainer: {
    flex: 1,
    marginHorizontal: wp('2%'),
  },
  reviewComment: {
    fontSize: hp('1.8%'),
    fontWeight: '500',
    color: '#333',
  },
  reviewRating: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#1DB578',
  },
});

export default ReviewItem
