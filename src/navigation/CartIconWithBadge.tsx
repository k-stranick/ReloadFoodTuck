import React, { useMemo } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { useAppSelector } from "../hooks/useRedux";
import { Color } from "../config/constants/Colors";
import { Icon } from "../components/Icon";

type Props = Readonly<{
  onPress: () => void;
}>;

export default function CartIconWithBadge({ onPress }: Props) {
  // Select cart items from Redux store
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  // Calculate total quantity using useMemo for performance optimization
  const totalQuantity = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  return (
    <Pressable
      onPress={onPress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={styles.container}
    >
      <Icon name="cart" />
      {totalQuantity > 0 && (
        <View pointerEvents="none" style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{totalQuantity}</Text>
        </View>
      )}
    </Pressable>
  );
}

// Styles extracted into a StyleSheet for better readability and maintainability
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginRight: 15,
  },
  badgeContainer: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: Color.BRIGHT_ORANGE,
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: Color.TEXT,
    fontSize: 10,
    fontWeight: "bold",
  },
});