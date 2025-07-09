import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { Image } from 'react-native'
import Pikia from "@/assets/svg/pikia-logo-1.svg"


const AuthLogoHeader = () => {
    const insets = useSafeAreaInsets()
    return (
        <View style={styles.container}>
            <Pikia  />
            {/* <Image source={require('../assets/pikia.png')} /> */}
            <Text style={styles.logoTitle}>
                <Text style={styles.textLogo}>Driver</Text>
                <Text style={styles.dotText}>.</Text>
            </Text>
        </View>
    )
}

export default AuthLogoHeader

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: 'none',
    },
    logoTitle: {
        color: Colors.btnColor,
    },
    textLogo: {
        fontSize: 16
    },
    dotText: {
        fontSize: 20,
        fontWeight: '700'
    },
})