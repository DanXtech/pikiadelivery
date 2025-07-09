import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TicketListType } from '@/types/type'
import { Link } from 'expo-router'

type Props = {
    item: TicketListType,
    index: number,
}

const TicketItems = ({item, index}: Props) => {
  return (
    <Link href={{
        pathname: '/ticket-details/[id]',
        params: { id : item.id},
      }} asChild>
        <View style={styles.ticketContainer}>
            
        </View>
      </Link>
  )
}

export default TicketItems

const styles = StyleSheet.create({
    ticketContainer: {
        
    }
})