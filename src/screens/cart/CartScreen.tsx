import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { CartItem } from "../../config/types/Product.types";
import { removeFromCart, clearCart } from "../../redux/slices/cartSlice";
import { styles } from "./CartScreen.styles";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";
import { Color } from "../../config/constants/Colors";

export default function CartScreen() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const dispatch = useAppDispatch();

  const handleRemove = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <ThemedView>
      <View style={styles.container}>
        <View style={styles.cartHeaderRow}>
          <ThemedText type="title" style={styles.header}>
            🛒 Your Cart
          </ThemedText>
          {cartItems.length > 0 && (
            <Pressable onPress={handleClearCart} style={styles.clearButton}>
              <Text style={styles.clear}>Clear Cart</Text>
            </Pressable>
          )}
        </View>
        <View style={styles.headerRow}>
          <ThemedText type="defaultSemiBold" style={{ flex: 1 }}>
            Item
          </ThemedText>
          <ThemedText
            type="defaultSemiBold"
            style={{ width: 70, textAlign: "right" }}
          >
            Price
          </ThemedText>
        </View>
        {cartItems.length === 0 ? (
          <Text style={styles.empty}>Your cart is empty.</Text>
        ) : (
          <>
            <FlatList<CartItem>
              data={cartItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                const priceEach = item.base_price ?? 0;
                const totalItemPrice = priceEach * item.quantity;

                return (
                  <View style={styles.cartRow}>
                    {/* Remove Button */}
                    <Text
                      style={styles.removeButton}
                      onPress={() => handleRemove(item.id)}
                    >
                      ❌
                    </Text>

                    {/* Item + Mods Block */}
                    <View style={styles.itemContent}>
                      <ThemedText
                        color={Color.BRIGHT_ORANGE}
                        type="defaultSemiBold"
                      >
                        {item.name} x {item.quantity}
                      </ThemedText>

                      {(item.excludedToppings ?? []).length > 0 && (
                        <Text style={styles.mods}>
                          No:{" "}
                          {item.excludedToppings?.map((t) => t.name).join(", ")}
                        </Text>
                      )}
                      {/* 
                    {item.selectedToppings?.filter((t) => !t.default).length >
                      0 && (
                      <Text style={styles.mods}>
                        Add:{" "}
                        {item.selectedToppings
                          .filter((t) => !t.default)
                          .map(
                            (t) =>
                              `${t.name}${
                                t.price ? ` (+$${t.price.toFixed(2)})` : ""
                              }`
                          )
                          .join(", ")}
                      </Text>
                    )} */}
                    </View>
                    {/* Price Column */}
                    <View style={styles.priceColumn}>
                      <ThemedText
                        color={Color.BRIGHT_ORANGE}
                        type="defaultSemiBold"
                      >
                        ${totalItemPrice.toFixed(2)}
                      </ThemedText>
                    </View>
                  </View>
                );
              }}
            />

            <ThemedText type="title" style={styles.total}>
              Total: ${totalPrice.toFixed(2)}
            </ThemedText>
            <TouchableOpacity
              onPress={handleClearCart}
              style={styles.checkoutButton}
            >
              <ThemedText type="title" color={Color.TEXT}>
                Checkout
              </ThemedText>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ThemedView>
  );
}
