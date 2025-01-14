import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Tabs} from "./Navigation/Tabs"
import profile from '../pages/profile';


const stack = createNativeStackNavigator();

export default function profileNavigator() {
  return (

    <NavigationContainer>
      
         <stack.Screen
           name="profile"
           component={profile}

         
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
