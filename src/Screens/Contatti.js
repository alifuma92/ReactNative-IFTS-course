import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'

const Contatti = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Contatti screen</Text>

      <TouchableOpacity
        style={{marginTop: 100}}
        onPress={() => navigation.openDrawer()}
      >
          <Text>Apri drawer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Contatti

const styles = StyleSheet.create({})