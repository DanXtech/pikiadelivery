import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { Svg, Path, Circle } from 'react-native-svg';
import CircleLeft from "../../assets/svg/CircleIcon.svg";
import StarLeft from "../../assets/svg/StarLeft.svg";
import CircleRight from "../../assets/svg/CircleRight.svg";
import StarRight from "../../assets/svg/StarRight.svg";
import SuccessFullCheck from "../../assets/svg/SuccessFullCheck.svg";
import Animated, { FadeInRight, FadeInUp } from 'react-native-reanimated';

const PayoutConfirmation = () => {
    // Handler to navigate to the home page
    const handleDonePress = () => {
        router.replace('/(root)/(tabs)'); // Navigate to the home screen, replacing the current stack
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <Animated.View entering={FadeInRight.delay(300).duration(300)}>
                <TouchableOpacity onPress={handleDonePress} style={styles.headerDoneText}>
                    <Text style={styles.DoneText}>Done</Text>
                </TouchableOpacity>
            </Animated.View>
            <View style={styles.content}>

                <View style={styles.confirmationContainer}>
                    {/* Decorative Elements */}
                    <View style={styles.decorativeCircleTopLeft}>
                        <CircleLeft/>
                    </View>
                    <View style={styles.decorativeStarTopLeft}>
                        <StarLeft/>
                    </View>
                    <View style={styles.decorativeCircleTopRight}>
                     
                       <StarRight/>
                    </View>
                    <View style={styles.decorativeStarBottomLeft}>
                    <CircleRight/>

                    </View>

                    {/* Checkmark Icon */}
                    <Animated.View style={styles.checkmarkContainer} entering={FadeInUp.delay(300).duration(500)}>
                       <SuccessFullCheck/>
                    </Animated.View>

                    {/* Success Message */}
                    <Animated.Text style={styles.title} 
                    entering={FadeInRight.delay(400).duration(700)}
                    >Successful!</Animated.Text>
                    <Animated.Text style={styles.message}
                    entering={FadeInRight.delay(300).duration(1300)}
                    >Bank Account has been successfully added!</Animated.Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PayoutConfirmation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFAFA',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    confirmationContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingVertical: 35,
        paddingHorizontal: 25,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        position: 'relative',
    },
    checkmarkContainer: {
        width: 70,
        height: 70,
        backgroundColor: '#34C759',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#34C759',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
    },
    headerDoneText: {
        padding: 20,
        alignItems: 'flex-end'
    },
    DoneText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    decorativeCircleTopLeft: {
        position: 'absolute',
        top: 20,
        left: 80,
        width: 20,
        height: 20,
    },
    decorativeStarTopLeft: {
        position: 'absolute',
        top: 80,
        left: 70,
        width: 16,
        height: 16,
    },
    decorativeCircleTopRight: {
        position: 'absolute',
        top: 25,
        right: 80,
        width: 20,
        height: 20,
    },
    decorativeStarBottomLeft: {
        position: 'absolute',
        bottom: 120,
        right: 80,
        width: 16,
        height: 16,
    },
   
});