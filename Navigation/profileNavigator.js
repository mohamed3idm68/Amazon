
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import profile from '../pages/profile';


const Stack = createNativeStackNavigator();

export default function profileNavigator() {
  return (

    <Stack.Navigator>
      
         <Stack.Screen
           name="profile"
           component={profile}

         
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
