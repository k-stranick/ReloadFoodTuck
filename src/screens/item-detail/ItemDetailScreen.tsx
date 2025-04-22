import { ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import { ItemDetailCard } from "./ItemDetailCard";
import { Item, Topping } from "../../config/types/Product.types";
import { MenuStackParamList } from "../../config/types/Navigation.types";
import { useAppDispatch } from "../../hooks/useRedux";
import { useToppings } from "../../hooks/useToppings";
import { addToCart } from "../../redux/slices/cartSlice";
import { ThemedView } from "../../components/ThemedView";
import { styles } from "./ItemDetail.styles";
import { handleSelectTopping } from "../../utils/handleToppingSelection";
import { useQuantity } from "../../hooks/useQuantity";

export default function ItemDetailScreen({
  route,
}: Readonly<{ route: RouteProp<MenuStackParamList, "ItemDetailScreen"> }>) {
  const { item } = route.params as { item: Item };
  const dispatch = useAppDispatch();
  const stackNav =
    useNavigation<NativeStackNavigationProp<MenuStackParamList>>();
  const { quantity, increment, decrement } = useQuantity(1);
  const { removeToppings, setRemoveToppings, addToppings, setAddToppings } =
    useToppings(item);
  const onSelectTopping = (topping: Topping) => {
    handleSelectTopping(topping, setRemoveToppings, setAddToppings);
  };

  const onAddToCart = () => {
    try {
      dispatch(
        addToCart({
          item,
          toppings: [...removeToppings, ...addToppings],
          quantity,
        })
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
          <ItemDetailCard
            item={item}
            removeList={removeToppings}
            addList={addToppings}
            onSelectTopping={onSelectTopping}
            onAddToCart={onAddToCart}
            quantity={quantity}
            increment={increment}
            decrement={decrement}
            style={styles.centeredCard}
          />
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}
