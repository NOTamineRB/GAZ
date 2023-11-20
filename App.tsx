import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppStack from "./stacks/AppStack";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter/Inter-ExtraBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
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
