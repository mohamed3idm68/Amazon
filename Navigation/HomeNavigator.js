import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home'; // Make sure Home.js exists in the correct path
import Item from '../pages/Item'; // Make sure Item.js exists in the correct path

// Create a stack navigator
const Stack = createNativeStackNavigator();

// HomeNavigator component
export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      {/* Home Screen */}
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: "Home Screen" }}  // Optional: Set title of the screen
      />
      {/* Item Screen */}
      <Stack.Screen 
        name="Item" 
        component={Item} 
        options={{ title: "Item Details" }} // Optional: Set title of the screen
      />
    </Stack.Navigator>
  );
}
