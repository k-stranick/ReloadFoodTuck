import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../../screens/home/HomeScreen";
import CartScreen from "../../screens/cart/CartScreen";
import type { RootStackParamList } from "../../config/types/Navigation.types";
import { Text, TouchableOpacity, View, Platform } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Header() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Drunken Noodle" }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: "Your Cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
