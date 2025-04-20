import React from "react";
import { Pressable, View, ViewStyle, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppSelector } from "../hooks/reduxHooks";
import { Color } from "../config/constants/Colors";
type Props = {
  onPress: () => void;
  // style?: ViewStyle;
};
export default function CartIconWithBadge({ onPress }: Props) {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Pressable
      onPress={onPress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={{
        padding: 10,
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginRight: 15,
      }}
    >
      <Ionicons name="cart-outline" size={24} color={Color.BRIGHT_ORANGE} />
      {totalQuantity > 0 && (
        <View
          pointerEvents="none"
          style={{
            position: "absolute",
            top: 2,
            right: 2,
            backgroundColor: Color.BRIGHT_ORANGE,
            borderRadius: 8,
            width: 16,
            height: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: Color.TEXT, fontSize: 10, fontWeight: "bold" }}>
            {totalQuantity}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
