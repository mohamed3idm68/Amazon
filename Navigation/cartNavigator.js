import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../pages/Cart'; // Ensure Cart component is correctly imported from the right path

const Stack = createNativeStackNavigator();

export default function CartNavigator() {
  return (
    <Stack.Navigator>
      {/* Cart Screen */}
      <Stack.Screen 
        name="Cart" 
        component={Cart} 
        options={{ title: 'Shopping Cart' }} // Optional: Set a custom title for the Cart screen
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
