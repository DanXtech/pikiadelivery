import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import RenderPayoutMethod from '../../components/RenderPayoutMethod'; // Adjust the import path as needed

// Define the interface for payout method items
interface PayoutMethod {
  id: string;
  name: string;
  icon: React.FC<any>; // Type for SVG component
}

import BankIcon from '@/assets/svg/bankIcon.svg'; // Import SVG as a component
import CreditCardIcon from '@/assets/svg/credit-cardIcon.svg';
import WalletIcon from '@/assets/svg/walletIcon.svg';
import OtherIcon from '@/assets/svg/otherIcon.svg';
import SubSectionHeader from '@/components/SubSectionHeader';

const AddPayoutMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('Bank Payout');

  const payoutMethods: PayoutMethod[] = [
    { id: '1', name: 'Bank Payout', icon: BankIcon },
    { id: '2', name: 'Credit Card', icon: CreditCardIcon },
    { id: '3', name: 'Wallet', icon: WalletIcon },
    { id: '4', name: 'Other', icon: OtherIcon },
  ];

  const renderPayoutMethod = ({ item }: { item: PayoutMethod }) => (
    <RenderPayoutMethod
      item={item}
      selectedMethod={selectedMethod}
      onSelect={setSelectedMethod}
    />
  );

  // Handler for the Add button press
  const handleAddPress = () => {
    // Navigate to the next screen with the selected method as a parameter
    router.push("/screens/add-bankAcount");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
        <SubSectionHeader title="Add Payout Method" showBack={true} />

      <View style={styles.content}>
        {/* Add a Payment Method Section */}
        <View style={styles.headerSection}>
          <View style={styles.plusIconContainer}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
          <Text style={styles.headerText}>Add a Payment method</Text>
        </View>

        <View style={styles.seletionOption}>
          {/* Payout Methods List */}
          <FlatList
            data={payoutMethods}
            renderItem={renderPayoutMethod}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />

          {/* Add Button */}
          <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddPayoutMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFA',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  plusIconContainer: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: '#34C759',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  plusIcon: {
    color: '#34C759',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34C759',
  },
  seletionOption: {
    flexGrow: 1,// Noted style from the UI
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  list: {
    flexGrow: 0,
  },
  addButton: {
    backgroundColor: '#34C759',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});