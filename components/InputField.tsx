import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

type Props = {}

const InputField = (props: React.ComponentProps<typeof TextInput>) => {
  return (
        <TextInput
          style={styles.inputField}
          {...props}
        />
  )
}

export default InputField

const styles = StyleSheet.create({
    inputField:{
      backgroundColor: Colors.gray,
      paddingVertical: 16,
      paddingHorizontal: 18,
      alignSelf: "stretch",
      borderRadius: 20,
      fontSize: 16,
      color: Colors.black,
      marginBottom: 20
    }
  })