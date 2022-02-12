/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { TouchableOpacity, SafeAreaView, Switch, Text, StyleSheet, View, ScrollView, Image, TextInput, Button } from 'react-native';

// import screens
import Homepage from './src/Screens/Homepage'
import Corso from './src/Screens/Corso'
import Professori from './src/Screens/Professori'

// import react navigation component
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// common header options
const headerOptions = {
    contentStyle: {
      backgroundColor: '#ffffff',
      padding: 15
    },
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerBackTitleVisible: false
}

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator>
        <Stack.Screen 
          name="Homepage" 
          component={Homepage} 
          options={{
            ...headerOptions,
            headerTitle: 'Corsi IFTS',
          }}
        />
        <Stack.Screen 
          name="Corso" 
          component={Corso}
          options={{...headerOptions, title: ''}}
        />
        <Stack.Screen 
          name="Professori" 
          component={Professori} 
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App
