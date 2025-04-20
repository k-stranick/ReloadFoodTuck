import { useEffect, useState } from "react";
import { ItemDetailCard } from "./ItemDetailCard";
import { universalFetch } from "../../services/fetchApi";
import { Item, Topping } from "../../config/types/Product.types";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addToCart } from "../../redux/slices/cartSlice";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../navigation/RootStackParam";
import type { RouteProp } from "@react-navigation/native";
import { ThemedView } from "../../components/ThemedView";
import { ScrollView, SafeAreaView } from "react-native";
import { MenuStackParamList } from "../../navigation/MenuStackNavigator"; //TODO

export default function ItemDetailScreen({
  route,
}: Readonly<{
  route: RouteProp<MenuStackParamList, "ItemDetailScreen">; //TODO this was changed from rootstack why?
}>) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { item }: { item: Item } = route.params;
  const [itemWithToppings, setItemWithToppings] = useState(item);

  useEffect(() => {
    const fetchToppings = async () => {
      const data = await universalFetch<
        {
          topping_id: number;
          toppings: { id: number; name: string; price?: number };
        }[]
      >("menu_item_toppings", {
        itemId: item.id.toString(),
      });

      if (!data) return;
      if (data) {
        console.log("Raw toppings data:", data);

        const toppings = data.map((d) => ({
          id: d.toppings.id,
          name: d.toppings.name,
          price: d.toppings.price,
          selected: false,
          default: true,
        }));

        setItemWithToppings({ ...item, toppings });
      }
    };

    fetchToppings();
  }, [item]);

  const onSelectTopping = (topping: Topping) => {
    setItemWithToppings((prev) => ({
      ...prev,
      toppings: prev.toppings?.map((t) =>
        t.id === topping.id ? { ...t, selected: !t.selected } : t
      ),
    }));
  };
  const dispatch = useAppDispatch();

  const onAddToCart = () => {
    dispatch(
      addToCart({
        item: itemWithToppings,
        toppings: itemWithToppings.toppings ?? [],
      })
    );
    navigation.reset({
      index: 0,
      routes: [{ name: "Menu" }],
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <ScrollView>
          <ItemDetailCard
            item={itemWithToppings}
            quantity={1}
            onAddToCart={onAddToCart}
            onSelectTopping={onSelectTopping}
          />
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}
