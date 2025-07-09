import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { 
  heightPercentageToDP as hp,
  widthPercentageToDP as wp 
} from 'react-native-responsive-screen';
import Header from '@/components/Headers';
import StarRating from './StarRating';
import SortingOption from '@/assets/svg/sorting-01.svg';
import ArrowDown from '@/assets/svg/arrow-down-01-sharp.svg';

interface ReviewHeaderProps {
  totalRating: number;
  dateFilter: string;
  onSortPress: () => void;
  currentSort: string; // Current sorting value to display the selected option
}

const ReviewHeader: React.FC<ReviewHeaderProps> = ({ 
  totalRating, 
  dateFilter,
  onSortPress,
  currentSort, 
}) => {
  // Map the currentSort value to its corresponding short label for display (not used now, but kept for future flexibility)
  const sortLabels: { [key: string]: string } = {
    default: 'Default',
    rating: 'Top Rating',
    lowestRating: 'Lowest Rating',
    recent: 'Recent',
  };

  // Always display "Sort by..." regardless of the selected option
  const displaySortText = 'Sort by...';

  return (
    <>
      <Header title="Reviews" />
      <View style={styles.content}>
        {/* Total Rating Section */}
        <View style={styles.ratingSection}>
          <Text style={styles.ratingTitle}>Total Rating</Text>
          <Text style={styles.ratingValue}>{totalRating.toFixed(1)}</Text>
          <StarRating rating={Math.floor(totalRating)} size={20} />
        </View>

        {/* Filter Section */}
        <View style={styles.filterSection}>
          <Text style={styles.dateFilter}>{dateFilter}</Text>
          <TouchableOpacity
            style={styles.sortButton}
            onPress={onSortPress}
          >
            <SortingOption width={wp('6%')} height={wp('6%')} />
            <Text style={styles.sortText}>{displaySortText}</Text>
            <ArrowDown width={wp('6%')} height={wp('6%')} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingTop: hp('10%'),
    paddingHorizontal: wp('5%'),
  },
  ratingSection: {
    alignItems: 'center',
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },
  ratingTitle: {
    fontSize: hp('2%'),
    color: '#666',
    marginBottom: hp('1%'),
  },
  ratingValue: {
    fontSize: hp('5%'),
    fontWeight: '900',
    marginBottom: hp('1%'),
  },
  filterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  dateFilter: {
    fontSize: hp('2.2%'),
    fontWeight: '600',
    color: '#333',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
    borderRadius: 8,
    gap: wp('1%'),
  },
  sortText: {
    fontSize: hp('1.8%'),
    fontWeight: '500',
    color: '#333',
  },
});

export default ReviewHeader;