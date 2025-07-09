import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import Back from "../assets/svg/Backsection.svg"


const TicketHeader = () => {
    const router = useRouter(); // Use Expo Router's useRouter hook for navigation

    const handleBackPress = () => {
        router.replace('/(root)/(tabs)'); // Navigate to the home page (root route)
      };
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ticket</Text>
            </View>

        </View>
    )
}

export default TicketHeader

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        gap: 20,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
    },
})