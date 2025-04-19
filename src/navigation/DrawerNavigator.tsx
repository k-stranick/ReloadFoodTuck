import { createDrawerNavigator } from "@react-navigation/drawer";
import { Color } from "../config/constants/Colors";
import { Icon } from "../components/Icon";
import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/cart/CartScreen";
import LoginScreen from "../screens/login/LoginScreen";
import MenuScreen from "../screens/menu/MenuScreen";
import { StyleProp, ViewStyle } from "react-native";
import MenuStackNavigator from "./MenuStackNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />

      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="Menu"
        component={MenuStackNavigator}
        options={{ title: "Menu" }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Cart" }}
      />

      {/* <Drawer.Screen
        name="Events"
        component={EventsScreen}
        options={{ title: "Events" }}
      /> */}
    </Drawer.Navigator>
  );
}
