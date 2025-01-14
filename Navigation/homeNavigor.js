import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Tabs} from "./Navigation/Tabs"
import Home from '../pages/home';
import item from '../pages/item';


const stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <NavigationContainer>
      
         <stack.Screen
           name="Home"
           component={Home}

         
         />
         <stack.Screen
           name="item"
           component={item}

         
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
