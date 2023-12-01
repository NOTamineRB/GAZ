import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Home from "../screens/home/Home";
import ScanResult from "../screens/home/ScanResult";
import SSO from "../screens/home/SSO";

export type AppStackParamList = {
  Login: undefined;
  Home: undefined;
  SSO: undefined;
  ScanResult: { barcodeType: string; barcodeData: string };
};
const Stack = createNativeStackNavigator<AppStackParamList>();
function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="SSO" component={SSO} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="ScanResult" component={ScanResult} /> */}
    </Stack.Navigator>
  );
}
export default AppStack;
