
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import profileNavigator from "./profileNavigator";
import cartNavigator from './cartNavigator';









const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            // tabBarIcon: ({focused}) => {
              // return (
                // <Icon name="home"  />
              // )
            // },
            
            headerShown: false,
            title:""
          }}
        />
        <Tab.Screen 
          name="ProfileNavigator"
          component={profileNavigator}
        />
        <Tab.Screen 
          name="cartNavigator"
          component={cartNavigator}
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
