import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import Back from "../assets/svg/Backsection.svg"


const PaymentHeader = () => {
    const router = useRouter(); 

     const handleBackPress = () => {
       router.replace('/settings/accountSetting'); 
     };
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Payment Settings</Text>
            </View>

        </View>
    )
}

export default PaymentHeader

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        gap: 30,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
})