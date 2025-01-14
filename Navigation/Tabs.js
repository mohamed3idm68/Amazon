import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from "./homeNavigor";
import cartNavigator from "./cartNavigator"
import ProfileNavigator from "./profileNavigator"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
        <Tab.screen 
          name="HomeNavigator"
          component={HomeNavigator}
        />
        <Tab.screen 
          name="ProfileNavigator"
          component={ProfileNavigator}
        />
        <Tab.screen 
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
