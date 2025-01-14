import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Tabs} from "./Navigation/Tabs"
import cart from '../pages/cart';


const stack = createNativeStackNavigator();

export default function cartNavigator() {
  return (
    <NavigationContainer>
      
         <stack.Screen
           name="cart"
           component={cart}

         
         />
        
            
        
    </NavigationContainer>
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
