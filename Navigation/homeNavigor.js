
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import item from '../pages/item';
import Home from '../pages/Home';





const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      
         <Stack.Screen
           name="Home"
           component={Home}

         
         />
         <Stack.Screen
           name="item"
           component={item}

         
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
