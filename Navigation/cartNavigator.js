
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import cart from '../pages/cart';




const Stack = createNativeStackNavigator();

export default function cartNavigator() {
  return (

    <Stack.Navigator>

      <Stack.Screen
                name="cart"
                component={cart}

              
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
