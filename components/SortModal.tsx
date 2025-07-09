import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { 
  heightPercentageToDP as hp,
  widthPercentageToDP as wp 
} from 'react-native-responsive-screen';

interface SortModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
  sortOptions: Array<{ label: string; value: string }>;
}

const SortModal: React.FC<SortModalProps> = ({ 
  isVisible, 
  onClose, 
  onSelect, 
  sortOptions 
}) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.dropdownContainer}
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()} 
          >
            {sortOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => {
                  onSelect(option.value);
                  onClose(); 
                }}
              >
                <Text style={styles.dropdownText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp('10%'), 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, 
    shadowRadius: 8,     
    paddingVertical: hp('3%'), 
    elevation: 10,       
    width: wp('85%'),    
    maxHeight: hp('50%'), 
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  dropdownItem: {
    width: '100%',            
    paddingVertical: hp('2%'), 
    paddingHorizontal: wp('5%'), 
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', 
    alignItems: 'center',     
    justifyContent: 'center', 
  },
  dropdownText: {
    fontSize: hp('2.2%'),    
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',      
  },
});

export default SortModal;