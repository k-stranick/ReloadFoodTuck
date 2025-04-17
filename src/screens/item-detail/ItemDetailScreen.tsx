import { useRoute, RouteProp } from "@react-navigation/native";
import { MenuStackParamList } from "../../navigation/MenuStackNavigator";
import { ItemDetailCard } from "./ItemDetailCard"; // ✅ your reusable card

const route = useRoute<RouteProp<MenuStackParamList, "ItemDetailScreen">>();
const { item } = route.params;

export default function ItemDetailScreen() {
  return (
    <ItemDetailCard
      item={item}
      quantity={1}
      onAddToCart={() => console.log("Add to cart:", item.name)}
      onSelectTopping={(t) => console.log("Selected topping:", t.name)}
    />
  );
}
