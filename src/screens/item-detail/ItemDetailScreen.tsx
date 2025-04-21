import { useEffect, useState } from "react";
import { ItemDetailCard } from "./ItemDetailCard";
import { universalFetch } from "../../services/fetchApi";
import { Item, Topping } from "../../config/types/Product.types";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addToCart } from "../../redux/slices/cartSlice";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import { ThemedView } from "../../components/ThemedView";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { MenuStackParamList } from "../../navigation/MenuStackNavigator"; //TODO

export default function ItemDetailScreen({
  route,
}: Readonly<{
  route: RouteProp<MenuStackParamList, "ItemDetailScreen">; //TODO this was changed from rootstack why?
}>) {
  const { item } = route.params as { item: Item };
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<MenuStackParamList>>();

  const [removeToppings, setRemoveToppings] = useState<Topping[]>([]);
  const [addToppings, setAddToppings] = useState<Topping[]>([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const addOnlyIds = [6, 7, 10]; // Wings & Tenders
    const isAddOnly = addOnlyIds.includes(item.id);
    const noAddIds = [1, 2, 3, 4, 5]; //fries and mozz sticks
    const isNoAdds = noAddIds.includes(item.id);

    async function load() {
      // fetch only the defaults from the join table
      const defaults =
        (await universalFetch<Topping[]>("menu_item_toppings", {
          itemId: item.id.toString(),
        })) ?? [];

      setRemoveToppings(
        defaults.map((t) => ({
          ...t,
          default: true,
          selected: false,
        }))
      );

      // fetch add‑able options:
      //   if it’s a sauce‑only item hit /api/sauces
      //   otherwise hit /api/additional_toppings
      if (isNoAdds) {
        setAddToppings([]);
      } else {
        const adds =
          (await universalFetch<Topping[]>(
            isAddOnly ? "sauces" : "additionalToppings"
          )) ?? [];

        setAddToppings(
          adds.map((t) => ({
            ...t,
            default: false,
            selected: false,
          }))
        );
      }
    }
    load();
  }, [item]);

  // toggle by matching on joinId for defaults, on id for extras
  const onSelectTopping = (t: Topping) => {
    if (t.default) {
      setRemoveToppings((rs) =>
        rs.map((x) =>
          x.joinId === t.joinId ? { ...x, selected: !x.selected } : x
        )
      );
    } else {
      setAddToppings((as) =>
        as.map((x) => (x.id === t.id ? { ...x, selected: !x.selected } : x))
      );
    }
  };

  const onAddToCart = () => {
    dispatch(
      addToCart({
        item,
        toppings: [...removeToppings, ...addToppings],
        quantity,
      })
    );
    navigation.reset({
      index: 0,
      routes: [{ name: "Menu" as keyof MenuStackParamList }],
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            paddingVertical: 16,
          }}
        >
          <ItemDetailCard
            item={item}
            removeList={removeToppings}
            addList={addToppings}
            onSelectTopping={onSelectTopping}
            onAddToCart={onAddToCart}
            quantity={quantity}
            onQuantityChange={setQuantity}
            style={styles.centeredCard}
          />
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  centeredCard: {
    alignSelf: "center",
    maxWidth: 700, // 700?
  },
});
