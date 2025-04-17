import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import RootNavigator from "./src/navigation/BottomTabNavigator";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import Header from "./src/components/header/Header";
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator />
        {/* <RootNavigator /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
