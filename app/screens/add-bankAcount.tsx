import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import SubSectionHeader from '@/components/SubSectionHeader';

const BankAccountSection = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [bankName, setBankName] = useState('');
  const [ifscSwiftCode, setIfscSwiftCode] = useState('');

//   // Handler for the Add button press
//   const handleAddPress = () => {
//     // Validation logic
//     if (!accountNumber || !accountName || !bankName || !ifscSwiftCode) {
//       alert('Please fill all fields');
//       return;
//     }
//     // Navigate to the confirmation screen with the entered details
//     router.push({
//       pathname: '/screens/payout-confirmation',
//       params: {
//         accountNumber,
//         accountName,
//         bankName,
//         ifscSwiftCode,
//       },
//     });
//   };
  const handleAddPress = () => {
    router.push("/screens/payout-confirmation");
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
          <Text style={styles.headerText}>Add a Bank Account</Text>
        </View>

        {/* Bank Account Details Section */}
        <View style={styles.detailsSection}>
          <Text style={styles.detailsTitle}>Bank Account Details</Text>

          {/* Account Number */}
          <TextInput
            style={styles.input}
            placeholder="Account Number"
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="numeric"
          />

          {/* Account Name */}
          <TextInput
            style={styles.input}
            placeholder="Account Name"
            value={accountName}
            onChangeText={setAccountName}
          />

          {/* Bank Name */}
          <TextInput
            style={styles.input}
            placeholder="Bank Name"
            value={bankName}
            onChangeText={setBankName}
          />

          {/* IFSC/Swift Code */}
          <TextInput
            style={styles.input}
            placeholder="IFSC / Swift Code"
            value={ifscSwiftCode}
            onChangeText={setIfscSwiftCode}
            autoCapitalize="characters"
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

export default BankAccountSection;

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
  detailsSection: {
    flexGrow: 1, // Noted style from the UI
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 25,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#000000',
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