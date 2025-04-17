// src/navigation/MenuStackNavigator.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../screens/menu/MenuScreen";
import ItemDetailScreen from "../screens/item-detail/ItemDetailScreen";

export type MenuStackParamList = {
  MenuScreen: undefined;
  ItemDetailScreen: { item: any }; // You can make this `MenuItem` for stricter typing
};

const Stack = createNativeStackNavigator<MenuStackParamList>();

export default function MenuStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ title: "Menu" }}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={{ title: "Item Detail" }}
      />
    </Stack.Navigator>
  );
}
