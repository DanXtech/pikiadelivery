import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export interface StarRatingProps {
  rating: number;
  size?: number;
  color?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  size = 20, 
  color = '#FFA41C' 
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesome
          key={star}
          name={star <= rating ? 'star' : 'star-o'}
          size={size}
          color={star <= rating ? color : '#ccc'}
          style={{ marginRight: 2 }}
        />
      ))}
    </View>
  );
};

export const UserRating: React.FC<StarRatingProps> = ({ 
  rating, 
  size = 16, 
  color = '#FFA41C' 
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesome
          key={star}
          name={star <= rating ? 'star' : 'star-o'}
          size={size}
          color={star <= rating ? color : '#ccc'}
          style={{ marginRight: 2 }}
        />
      ))}
    </View>
  );
};



export default StarRating