import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import profileNavigator from "./profileNavigator";
import CartNavigator from "./CartNavigator";









const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" // Name it more intuitively as "Home" instead of "HomeNavigator"
        component={HomeNavigator} 
        options={{ title: 'Home' , tabBarIcon:({focused}) => {
          return 
        } }} // You can add more options if needed
      />
      <Tab.Screen 
        name="Profile" // Name it more intuitively as "Profile" instead of "ProfileNavigator"
        component={profileNavigator}
        options={{ title: 'Profile' }} // You can add more options if needed
      />
      <Tab.Screen 
        name="Cart" // Name it more intuitively as "Cart" instead of "cartNavigator"
        component={CartNavigator}
        options={{ title: 'Cart' }} // You can add more options if needed
      />
    </Tab.Navigator>
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
