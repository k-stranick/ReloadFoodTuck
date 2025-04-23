import { ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import { ItemDetailCard } from "./components/ItemDetailCard";
import { Item, Topping } from "../../config/types/Product.types";
import { MenuStackParamList } from "../../config/types/Navigation.types";
import { useAppDispatch } from "../../hooks/useRedux";
import { useQuantity } from "../../hooks/useQuantity";
import { useToppings } from "../../hooks/useToppings";
import { addToCart } from "../../redux/slices/cartSlice";
import { ThemedView } from "../../components/ThemedView";
import { styles } from "./ItemDetail.styles";
import { handleSelectTopping } from "../../utils/handleToppingSelection";

/**
 * ItemDetailScreen Component
 * 
 * This screen displays detailed information about a menu item, including its description,
 * toppings (both removable and additional), and quantity controls. Users can customize
 * the item by selecting/deselecting toppings and adjusting the quantity before adding it
 * to the cart.
 * 
 * @param route - Contains the route parameters, including the selected item.
 * @returns A React component that renders the item details screen.
 */
export default function ItemDetailScreen({
  route,
}: Readonly<{ route: RouteProp<MenuStackParamList, "ItemDetailScreen"> }>) {
  const { item } = route.params as { item: Item }; // Extract the item Object from the route parameters ensures TypeScript knows the structure of the item object, which is defined by the Item interface.
  const dispatch = useAppDispatch(); // The Redux dispatch function for triggering actions like addToCart.
  const stackNav = useNavigation<NativeStackNavigationProp<MenuStackParamList>>(); //The navigation object for stack navigation, used to navigate back to the previous screen.
  const { quantity, increment, decrement } = useQuantity(1); //State and handlers for managing the quantity of the item.
  const { removeToppings, setRemoveToppings, addToppings, setAddToppings } = useToppings(item); //State and handlers for managing the toppings.
  const onSelectTopping = (topping: Topping) => { handleSelectTopping(topping, setRemoveToppings, setAddToppings); }; //A function to handle selecting or deselecting toppings.
  
  /**
   * Handles adding the item to the cart.
   * 
   * Combines the item, selected toppings, and quantity into a payload and dispatches
   * the `addToCart` action. Navigates back to the previous screen upon success.
   */
  const onAddToCart = () => {
    try {
      dispatch(
        // updated the cart using spread operator to combine the toppings and quantity into a single object
        addToCart({ item, toppings: [...removeToppings, ...addToppings], quantity, })
      );

      stackNav.goBack();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (

    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.themedView}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
           {/* Render the ItemDetailCard component */}
          <ItemDetailCard
            item={item} // The item being displayed
            removeList={removeToppings} // List of removable toppings
            addList={addToppings} // List of additional toppings
            onSelectTopping={onSelectTopping} // Handler for topping selection
            onAddToCart={onAddToCart} // Handler for adding the item to the cart
            quantity={quantity} // Current quantity of the item
            increment={increment} // Function to increment the quantity
            decrement={decrement} // Function to decrement the quantity
            style={styles.centeredCard} 
          />
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}
