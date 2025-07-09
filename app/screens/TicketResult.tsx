import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

import SubSectionHeader from '@/components/SubSectionHeader'

const ShowNotification = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <SubSectionHeader title="Ticket" showBack={true} />

            <View style={styles.content}>
                {/* <TicketList  /> */}

                <Text>TicketList</Text>

            </View>
        </SafeAreaView>
    )
}

export default ShowNotification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFAFA',
    },
    content: {
        flex: 1,
    },

})
