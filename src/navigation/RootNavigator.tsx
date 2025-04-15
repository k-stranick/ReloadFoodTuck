import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { Color } from "../config/constants/Colors";
import { Icon } from "../components/Icon";
import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/cart/CartScreen";
import LoginScreen from "../screens/login/LoginScreen";
import MenuScreen from "../screens/menu/MenuScreen";
import { StyleProp, ViewStyle } from "react-native";

const Tab = createBottomTabNavigator();

// const screenOptions = ({ route }: any) => ({
//   headerShown: false,
//   tabBarShowLabel: false,
//   tabBarStyle: {
//     backgroundColor: Color.BOTTOM_NAV_BAR,
//     justifyContent: 'center', // center content vertically
//     alignItems: 'center', // center content horizontally
//   },
//   tabBarIconStyle: {
//     marginTop: 10, // fine-tune vertical alignment
//   },
//   tabBarActiveTintColor: Color.NAV_ICON_ACTIVE ?? "rgb(235, 212, 111)",
//   tabBarInactiveTintColor: Color.NAV_ICON_INACTIVE ?? "rgba(247, 163, 54, 0.8)",
//   tabBarIcon: ({ color, size }: { color: string; size: number }) => (
//     <Icon name={getIconName(route.name)} size={size} color={color} />
//   ),
// });

function screenOptions({
  route,
}: {
  route: { name: string };
}): BottomTabNavigationOptions {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: Color.BOTTOM_NAV_BAR,
      justifyContent: "center",
      alignItems: "center",
    } as StyleProp<ViewStyle>,
    tabBarIconStyle: {
      marginTop: 10,
    },
    tabBarActiveTintColor: Color.NAV_ICON_ACTIVE ?? "rgb(235, 212, 111)",
    tabBarInactiveTintColor:
      Color.NAV_ICON_INACTIVE ?? "rgba(247, 163, 54, 0.8)",
    tabBarIcon: ({ color, size }) => (
      <Icon name={getIconName(route.name)} size={size} color={color} />
    ),
  };
}

/**
 * RootNavigator defines the bottom tab navigation for the app using React Navigation.
 * It includes four primary screens: Home, Hiking, Food, and Ski, each represented with a custom icon.
 * The navigator hides the header and tab labels for a cleaner UI and uses themed colors for active/inactive states.
 *
 * @returns {JSX.Element} A configured bottom tab navigator with custom icons and styling.
 *
 * Example usage:
 * ```tsx
 * import RootNavigator from './navigation/RootNavigator';
 * ...
 * <NavigationContainer>
 *   <RootNavigator />
 * </NavigationContainer>
 * ```
 */
export default function RootNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Food" component={MenuScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Ski" component={LoginScreen} />
    </Tab.Navigator>
  );
}

/**
 * Maps route names to Ionicon icon names used in the bottom tab bar.
 *
 * @param {string} routeName - The name of the current tab route.
 * @returns {string} The corresponding Ionicon icon name.
 *
 * Example:
 * ```ts
 * getIconName("Ski"); // returns "snow"
 * ```
 */
function getIconName(routeName: string) {
  switch (routeName) {
    case "Hiking":
      return "trail-sign";
    case "Food":
      return "restaurant";
    case "Ski":
      return "snow";
    default:
      return "home-outline";
  }
}
