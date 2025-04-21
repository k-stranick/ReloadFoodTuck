import { createDrawerNavigator } from "@react-navigation/drawer";
import { Color } from "../config/constants/Colors";
import { Icon } from "../components/Icon";
import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/cart/CartScreen";
import LoginScreen from "../screens/login/LoginScreen";
import { TouchableOpacity } from "react-native";
import MenuStackNavigator from "./MenuStackNavigator";
import CartIconWithBadge from "./CartIconWithBadge";
import { DrawerParamList } from "../config/types/Navigation.types";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.HEADER,
        },
        headerTitleAlign: "center",
        headerTintColor: Color.BRIGHT_ORANGE,
        drawerInactiveTintColor: Color.STEEL_SILVER,
        drawerActiveTintColor: Color.BRIGHT_ORANGE,
        drawerItemStyle: { marginVertical: 5 },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "500",
        },
        drawerStyle: {
          backgroundColor: Color.BACKGROUND,
        },
      }}
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
        options={({ navigation }) => ({
          title: "Menu",
          headerRight: () => (
            <CartIconWithBadge onPress={() => navigation.jumpTo("Cart")} />
          ),
        })}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={({ navigation }) => ({
          title: "Cart",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.jumpTo("Menu")}
              style={{ marginRight: 12 }} // ensures it's not cut off
            >
              <Icon
                name="restaurant"
                style={{ margin: 12 }}
                color={Color.BRIGHT_ORANGE}
              />
            </TouchableOpacity>
          ),
        })}
      />

      {/* <Drawer.Screen
        name="Events"
        component={EventsScreen}
        options={{ title: "Events" }}
      /> */}
    </Drawer.Navigator>
  );
}
