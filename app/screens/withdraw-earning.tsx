import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, Link, router } from 'expo-router';
import SubSectionHeader from '@/components/SubSectionHeader';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Transaction } from '@/types/type';
import { transactionsData } from '@/data/db';

// Define the Transaction interface



const WithdrawEarning = () => {
  const [amount, setAmount] = useState('250'); // State for the withdrawal amount

  const renderTransactionItem = ({ item, index }: { item: Transaction; index: number }) => (
    <View
      style={[
        styles.transactionItem,
        index === transactionsData.length - 1 && { borderBottomWidth: 0 }, // Remove border for last item
      ]}
      key={item.id}
    >
      <View style={styles.transactionLeft}>
       <View style={styles.transactionTitle}>
       <Text style={[styles.transactionAmount, { color: item.isCredit ? '#22B573' : '#FF0000' }]}>
          {item.amount}
        </Text>
      {item.details ? <Text style={styles.transactionDetails}>{item.details}</Text> : null}
       </View>
        <Text style={styles.transactionSource}>{item.source}</Text>
        <Text style={styles.transactionTimestamp}>{item.timestamp}</Text>
      </View>
      <View style={styles.transactionRight}>
        <Text style={styles.transactionType}>{item.type}</Text>
        <Text style={styles.transactionRecipient}>{item.recipient}</Text>
      </View>
    </View>
  );


  const handleWithdraw = () => {
    // Implement withdrawal logic here (e.g., API call)
   router.push('/screens/confirm-withdraw')
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <SubSectionHeader title="Withdraw earnings" showBack={true} />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}  showsVerticalScrollIndicator={false}>
        {/* Withdraw Input Section */}
        <View style={styles.withdrawSection}>
          <Text style={styles.title}>Enter Amount to Withdraw</Text>
          <TextInput
            style={styles.amountInput}
            value={`$ ${amount}`}
            onChangeText={(text) => setAmount(text.replace('$ ', ''))}
            keyboardType="numeric"
            placeholder="$ 0"
            placeholderTextColor="#747373"
          />
          <Text style={styles.withdrawNote}>
            Withdrawal might take up to 3 - 24hrs depending on your bank
          </Text>
          <TouchableOpacity style={styles.withdrawButton} onPress={handleWithdraw}>
            <Text style={styles.withdrawButtonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        {/* Transactions Section */}
        <View style={styles.transactionsSection}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.sectionTitle}>Transactions</Text>
            <Text style={styles.viewAllLink}>
              View All
            </Text>
          </View>
          <View>
            {transactionsData.map((transaction, index) =>
              renderTransactionItem({
                item: {
                  ...transaction,
                  type: transaction.type as "Payment" | "Withdrawal", // Type assertion
                },
                index,
              })
            )}
          </View>




        </View>

        <View>
          <Text style={styles.footerNote}>
            If you encounter any issues on payment, send us mail to{' '}
            <Text style={styles.footerEmail}>Payment@pikia.com</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WithdrawEarning;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFA',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingVertical: hp('2%'),
  },
  // Withdraw Input Section
  withdrawSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: wp('5%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('10%'),
    marginBottom: hp('2%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: hp('2%'),
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#22B573',
    marginBottom: hp('2%'),
  },
  amountInput: {
    borderWidth: 1,
    borderColor: '#747373',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    color: '#000',
    marginBottom: hp('1%'),
  },
  withdrawNote: {
    fontSize: 12,
    color: '#747373',
    marginBottom: hp('2%'),
    textAlign: 'center',
  },
  withdrawButton: {
    backgroundColor: '#22B573',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  withdrawButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  // Transactions Section
  transactionsSection: {
    flex: 1,
    marginTop: wp('3%'),
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: '#ffffff',
    marginBottom: wp('5%')
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp('1.5%'),
    paddingHorizontal: wp('5%')
  },
  viewAllLink: {
    fontSize: 14,
    color: '#22B573',
    fontWeight: '500',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp('4%'),
    marginBottom: hp('1%'),
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',

  },
  transactionLeft: {
    flex: 1,
  },
  transactionTitle:{
    flexDirection: 'row',
    gap: wp("1.5%"),
    
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: hp('0.5%'),
  },
  transactionDetails: {
    fontSize: 12,
    marginBottom: hp('0.5%'),
    color: '#ffffff',
    backgroundColor: "#22B573",
    borderRadius: 20,
    paddingVertical: hp('0.5%'),
    paddingHorizontal: hp('1%')
  },
  transactionSource: {
    fontSize: 14,
    color: '#333',
    marginBottom: hp('0.5%'),
  },
  transactionTimestamp: {
    fontSize: 12,
    color: '#747373',
  },
  transactionRight: {
    alignItems: 'flex-start',
  },
  transactionType: {
    fontSize: 14,
    color: '#22B573',
    fontWeight: '500',
    marginBottom: hp('0.5%'),
  },
  transactionRecipient: {
    fontSize: 12,
    color: '#747373',
  },
  footerNote: {
    fontSize: 12,
    color: '#747373',
    textAlign: 'center',
    padding: hp('3%'),
    marginVertical: hp('5%'),
    backgroundColor: '#E9F7ED'
  },
  footerEmail: {
    color: '#22B573',

    fontWeight: '500',
  },
});