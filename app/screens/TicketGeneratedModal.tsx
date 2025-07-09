import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import Ticket from '../../assets/svg/ticket_icon.svg';
import TicketBell from '../../assets/svg/ticketBell.svg';
import SubSectionHeader from '@/components/SubSectionHeader';

const TicketGeneratedModal = () => {

  const handlePress = () => {
    router.push('/screens/TicketResult')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <SubSectionHeader title="Create new Ticket" showBack={true} />

      <View style={styles.TicketPage}>
        {/* Ticket Confirmation Card */}
        <View style={styles.boxTicket}>
          <Ticket />
          <View style={styles.textContent}>
            <Text style={styles.titleText}>Your Ticket Has been Generated!</Text>
            <Text style={styles.textDec}>We will contact you shortly as we attend to your ticket</Text>
          </View>
          <View style={styles.lastContent}>
            <TicketBell />
            <Text style={styles.backmessage}>
              We will keep you posted about the status of Your Ticket via Notifications
            </Text>
          </View>
        </View>

        {/* View Ticket Button at the Bottom */}
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text style={styles.btnText}>View Ticket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TicketGeneratedModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9F5',
  },
  TicketPage: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  boxTicket: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    paddingHorizontal: 20,
  },
  titleText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    paddingVertical: 10,
  },
  textDec: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    paddingHorizontal: 20,
    color: '#555555', 
  },
  lastContent: {
    paddingTop: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backmessage: {
    paddingHorizontal: 10, 
    fontSize: 14,
    color: '#555555', 
    flex: 1, 
  },
  btn: {
    backgroundColor: '#20B964', 
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20, 
  },
  btnText: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: '600',
  },
});