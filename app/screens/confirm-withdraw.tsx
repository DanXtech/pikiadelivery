import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import SubSectionHeader from '@/components/SubSectionHeader';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ConfirmWithdraw = () => {
  const router = useRouter();

  const handleWithdraw = () => {
    // Implement withdrawal logic here (e.g., API call)
    console.log('Withdrawal confirmed');
    // Navigate back or to a success screen after confirmation
    router.push('/screens/withdraw-successfull');
  };

  const handleCancel = () => {
    // Navigate back to the previous screen
    router.back()
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <SubSectionHeader title="Withdraw earnings" showBack={true} />

      <View style={styles.content}>
        {/* Confirmation Box */}
        <Text style={styles.confirmationTitle}>Confirm Withdrawal</Text>
        <View style={styles.confirmationBox}>
        
         <View style={styles.innterConfirmationBox}>
         <Text style={styles.confirmationMessage}>
            You are about Withdrawing <Text style={styles.boldText}>$250 </Text>to <Text style={styles.boldText}>UKAEGBU Great junior</Text> of <Text style={styles.boldText}>BARCLAY BANK</Text>
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.withdrawButton} onPress={handleWithdraw}>
              <Text style={styles.buttonText}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
         </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmWithdraw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFA',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp('10%'),
    paddingHorizontal: wp('5%'),
  },
  confirmationBox: {
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: wp('3%'),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('15%')
  },

  innterConfirmationBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: wp('3%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('15%'),
    alignItems: 'center',
    elevation: 8,
  },
  confirmationTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#22B573',
    marginBottom: hp('2%'),
  },
  confirmationMessage: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    width: wp('70%'),
    marginBottom: hp('4%'),
  },
  boldText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  withdrawButton: {
    backgroundColor: '#22B573',
    paddingVertical: 20,
    paddingHorizontal: wp('8%'),
    borderRadius: 10,
    flex: 1,
    marginRight: wp('2%'),
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 20,
    paddingHorizontal: wp('8%'),
    borderRadius: 10,
    flex: 1,
    marginLeft: wp('2%'),
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});