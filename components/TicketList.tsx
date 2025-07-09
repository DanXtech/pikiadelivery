import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ticket from "../data/db"
import { TicketListType } from '@/types/type'

type Props = {
    ticket: TicketListType[],
    flatlist: boolean

}

const TicketList = (props: Props) => {
  return (
    <View>
      <Text>TicketList</Text>
    </View>
  )
}

export default TicketList

const styles = StyleSheet.create({})