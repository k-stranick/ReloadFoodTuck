// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const CartScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Cart Screen</Text>
//       <Text>Your cart is currently empty.</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
// });

// export default CartScreen;

import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
// import { CartItem } from "../../types/interfaces/products/Product.types";
import { removeFromCart, clearCart } from "../../redux/slices/cartSlice";
import { styles } from "./CartScreen.styles";

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
    <View style={styles.container}>
      <Text style={styles.header}>🛒 Your Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemRow}>
                <Text style={styles.itemText}>
                  {item.name} x {item.quantity}
                </Text>

                {item.excludedToppings?.length > 0 && (
                  <Text>
                    No: {item.excludedToppings.map((t) => t.name).join(", ")}
                  </Text>
                )}

                <Text style={styles.itemPrice}>
                  {/* ${item.price.toFixed(2)} ea */}
                </Text>
                <Text
                  style={styles.remove}
                  onPress={() => handleRemove(item.id)}
                >
                  ❌
                </Text>
              </View>
            )}
          />

          <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
          <TouchableOpacity
            onPress={handleClearCart}
            style={styles.clearButton}
          >
            <Text style={styles.clear}>🧹 Clear Cart</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
