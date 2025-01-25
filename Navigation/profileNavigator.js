import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "../pages/profile"

const Stack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    
      <Stack.Navigator>
        {/* Profile Screen */}
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ title: 'Profile Screen' }} // You can customize title here
        />
      </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
