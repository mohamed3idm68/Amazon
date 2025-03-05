import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Navigation/Tabs";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import adsReducers from "./Reducers/adsReducers";
import cartReducer from "./Reducers/cartReducer";

const Stack = createNativeStackNavigator();

const store = createStore(combineReducers({ adsReducers, cartReducer }));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="tabs"
            component={Tabs}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
