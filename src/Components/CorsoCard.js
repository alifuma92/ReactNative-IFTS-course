import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CorsoCard = ({nome, colore}) => {
  return (
    <View style={{...styles.cardContainer, backgroundColor: colore}}>
      <Text style={styles.cardTitle}>
          {nome}
      </Text>
    </View>
  )
}

export default CorsoCard

const styles = StyleSheet.create({
    cardContainer: {
        padding: 30,
        alignItems: 'center',
        borderRadius: 10,
    },
    cardTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 24
    }
})