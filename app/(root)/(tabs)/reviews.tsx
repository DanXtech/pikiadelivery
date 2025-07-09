import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { 
  heightPercentageToDP as hp,
  widthPercentageToDP as wp 
} from 'react-native-responsive-screen';

// Import components
import ReviewItem, { ReviewItemType } from '../../../components/ReviewItem';
import ReviewHeader from '../../../components/ReviewHeader';
import SortModal from '../../../components/SortModal';

// Import SVG avatars
import JudithProfile1 from '../../../assets/svg/JudithProfile1.svg';
import SadeOjoProfile2 from '../../../assets/svg/SadeOjoProfile2.svg';
import OkonProfile3 from '../../../assets/svg/OkonProfile3.svg';
import Header from '@/components/Headers';

const ReviewsScreen = () => {
  const totalRating = 2.6;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [sortBy, setSortBy] = useState('recent'); // Default sorting set to 'recent'

  // Sample review data
  const reviews: ReviewItemType[] = [
    {
      id: '1',
      name: 'Judith Eze',
      rating: 4.0,
      comment: 'Amazing Guy!',
      avatar: JudithProfile1,
      date: 'Today',
    },
    {
      id: '2',
      name: 'Sade Ojo',
      rating: 1.0,
      comment: 'Omo werey',
      avatar: SadeOjoProfile2,
      date: 'Today',
    },
    {
      id: '3',
      name: 'Okon Essien',
      rating: 1.0,
      comment: 'No Patience',
      avatar: OkonProfile3,
      date: 'Today',
    },
  ];

  // Dropdown options
  const sortOptions = [
    { label: 'Default sorting', value: 'default' },
    { label: 'Sort by Top Rating', value: 'rating' },
    { label: 'Lowest Top Rating', value: 'lowestRating' },
    { label: 'Sort by Recent', value: 'recent' },
    { label: 'Cancel', value: 'cancel' },
  ];

  // Sorting function
  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating; // Sort by highest rating
      case 'lowestRating':
        return a.rating - b.rating; // Sort by lowest rating
      case 'recent':
      default:
        return 0; // No sorting (maintain original order or sort by date if needed)
    }
  });

  // Handle sorting selection
  const handleSort = (value: string) => {
    setIsDropdownVisible(false); // Close the modal
    if (value === 'cancel') {
      setSortBy('recent'); // Reset to default sorting (or any other default)
    } else if (value !== 'default') {
      setSortBy(value); // Update sortBy with the selected value
    }
    // If 'default' is selected, we can keep the current sortBy or reset (e.g., setSortBy('recent'))
  };

  return (
    <View style={styles.container}>
      <Header title="Reviews" />
      <FlatList
        ListHeaderComponent={() => (
          <ReviewHeader 
            totalRating={totalRating} 
            dateFilter="Today"
            onSortPress={() => setIsDropdownVisible(true)} 
            currentSort={sortBy} // Pass current sort value to display
          />
        )}
        data={sortedReviews}
        renderItem={({ item }) => <ReviewItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <SortModal
        isVisible={isDropdownVisible}
        onClose={() => setIsDropdownVisible(false)}
        onSelect={handleSort}
        sortOptions={sortOptions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    paddingBottom: hp('10%'),
  },
});

export default ReviewsScreen;