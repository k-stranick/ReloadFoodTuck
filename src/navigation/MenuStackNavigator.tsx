import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../screens/menu/MenuScreen";
import ItemDetailScreen from "../screens/item-detail/ItemDetailScreen";
import { MenuStackParamList } from "../config/types/Navigation.types";

const Stack = createNativeStackNavigator<MenuStackParamList>();

/**
 * MenuStackNavigator Component
 * 
 * This component defines the stack navigator for the menu-related screens in the application.
 * It uses `@react-navigation/native-stack` to create a stack navigator with two screens:
 * - `MenuScreen`: Displays the list of menu items.
 * - `ItemDetailScreen`: Displays the details of a selected menu item.
 * 
 * The stack navigator is configured with the following options:
 * - `headerShown: false`: Hides the header for all screens in this stack.
 * - `animation: "slide_from_bottom"`: Adds a slide-from-bottom animation for the `ItemDetailScreen`.
 * 
 * @returns A stack navigator containing the `MenuScreen` and `ItemDetailScreen`.
 * 
 * @example
 * // Usage in a parent navigator (e.g., DrawerNavigator)
 * <MenuStackNavigator />
 */
export default function MenuStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MenuScreen" component={MenuScreen} />

      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={{
          animation: "slide_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
}
