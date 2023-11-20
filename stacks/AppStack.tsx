import { View, Text } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
// Define the type for AppStackParamList if it's not already defined
type AppStackParamList = {
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Home" component={HomeStack} /> */}
    </Stack.Navigator>
  );
}
export default AppStack;