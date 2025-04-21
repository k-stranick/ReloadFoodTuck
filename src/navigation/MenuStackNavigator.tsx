import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../screens/menu/MenuScreen";
import ItemDetailScreen from "../screens/item-detail/ItemDetailScreen";
import { MenuStackParamList } from "../config/types/Navigation.types";

const Stack = createNativeStackNavigator<MenuStackParamList>();

export default function MenuStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MenuScreen" component={MenuScreen} />

      <Stack.Group
        screenOptions={{
          presentation: "transparentModal", // makes background transparent
          gestureEnabled: true, // allows swipe down to dismiss
          contentStyle: {
            // fade the background
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
      >
        <Stack.Screen
          name="ItemDetailScreen"
          component={ItemDetailScreen}
          options={{
            animation: "slide_from_bottom",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
