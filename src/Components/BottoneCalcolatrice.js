import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const BottoneCalcolatrice = ({colore_sfondo, colore, testo, width, height = 80, press}) => {
  return (
      <TouchableOpacity
        style={{...styles.wrapper, backgroundColor: colore_sfondo, width: width, height: height, borderRadius: width  }}
        onPress={press}
      >
        <Text
          style={{...styles.text, color: colore}}
        >
          {testo}
        </Text>
      </TouchableOpacity>
  )
}

export default BottoneCalcolatrice

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})