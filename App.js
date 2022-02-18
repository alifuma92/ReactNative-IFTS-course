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
import Contatti from './src/Screens/Contatti';
import Calcolatrice from './src/Screens/Calcolatrice';

// import icons
import Icon from 'react-native-vector-icons/dist/Ionicons';

// import react navigation component
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


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

const HomepageStackNavigator = () => {
  return (
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
  )
}

const App = () => {
  return (
      <NavigationContainer>
        {/* Rest of your app code */}
        <Drawer.Navigator initialRouteName="Homepage">
          <Drawer.Screen name="Homepage" component={HomepageStackNavigator} />
          <Drawer.Screen name="Contatti" component={Contatti} />
          <Drawer.Screen name="Calcolatrice" component={Calcolatrice} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App
