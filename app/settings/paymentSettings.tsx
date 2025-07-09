import { Keyboard, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PaymentHeader from '@/components/PaymentHeader';
import InVoicePay from "../../assets/svg/invoice-pay-01.svg"
import Walletpay from "../../assets/svg/wallet-pay.svg"
import Edit from "../../assets/svg/pencil-edit.svg";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SubSectionHeader from '@/components/SubSectionHeader';


const PaymentSettings = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <SubSectionHeader title="Payment Settings" showBack={true} />
            <KeyboardAwareScrollView
                contentContainerStyle={styles.scrollContainer}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.boxcontent}>
                    <Text style={styles.paySettingsText}>Payout settings</Text>

                    <View style={styles.PayBoxSection}>
                        <View style={styles.payoutOption}>
                            <View style={styles.PayIcon}>
                                <InVoicePay />
                            </View>
                            <Text style={styles.payoutText}>You have no active Payout</Text>
                            <TouchableOpacity
                                style={styles.payoutBtn}
                                onPress={() => router.replace("/screens/add-payoutmethod")}
                            >
                                <Text style={styles.textPay}>+ Add Payout method</Text>
                            </TouchableOpacity>
                        </View>


                        {/* <Text style={styles.paymentLocation}>if you encounter any issues on payment,
                            send us mail to Payment@pikia.com</Text> */}
                    </View>

                    <View style={styles.editPay}>
                        <View style={styles.topSection}>
                            <View style={styles.walletbg}>
                                <Walletpay />
                            </View>
                            <Text style={styles.title}>Withdrawal Threshold</Text>
                        </View>
                        <View style={styles.downSection}>
                            <View style={styles.payPrice}>
                                <Text style={styles.amount}>$100</Text>
                                <Text style={styles.description}>
                                    Default lowest withdrawal amount limit is $100
                                </Text>
                            </View>
                            <Edit />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.paymentLocation}>if you encounter any issues on payment,
                        send us mail to Payment@pikia.com</Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default PaymentSettings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFAFA',
    },
    scrollContainer: {
        flexGrow: 1,
       
    },

    boxcontent: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    paySettingsText: {
        color: '#22B573',
        fontWeight: '600',
        fontSize: 16,
    },
    PayBoxSection: {
        marginTop: 20,
        flexDirection: 'column',
        gap: 15
    },
    payoutOption: {
        backgroundColor: "#ffffff",
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 10,
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        flex: 1,
        alignItems: 'center',
        paddingVertical: 25
    },
    PayIcon: {
        backgroundColor: "#E9F7ED",
        width: hp('10%'),
        height: hp('10%'),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp('10%')
    },
    payoutText: {
        paddingVertical: 20,
        color: '#22B573',
        fontWeight: '500'
    },
    payoutBtn: {
        backgroundColor: '#22B573',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 20
    },
    textPay: {
        color: 'white',
    },
    editPay: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
        padding: 5,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    walletbg: {
        backgroundColor: '#E9F7ED',
        width: wp('15%'),
        height: wp('15%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp('10%')
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
        color: '#22B573',
        marginLeft: 10,
    },
    downSection: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    payPrice: {
        flexDirection: 'column',
    },
    amount: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#747373',
        width: 200,

    },
    paymentLocation: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        color: '#000000',
        backgroundColor: '#E9F7ED'
    },
})