// src/navigation/MenuStackNavigator.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../screens/menu/MenuScreen";
import ItemDetailScreen from "../screens/item-detail/ItemDetailScreen";
import { Item } from "../config/types/Product.types"; // Adjust the import path as necessary

export type MenuStackParamList = {
  MenuScreen: undefined;
  ItemDetailScreen: { item: Item };
};

const Stack = createNativeStackNavigator<MenuStackParamList>();

export default function MenuStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        // options={{ title: "Menu" }}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        // options={{ title: "Item Detail" }}
      />
    </Stack.Navigator>
  );
}
