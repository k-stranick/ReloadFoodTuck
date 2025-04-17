import { View, Text, TouchableOpacity } from "react-native";
import { ThemedText } from "../../components/ThemedText";
import { Card } from "../../components/Card";
import { ItemDetailCardProps } from "../../config/types/Product.types";
import { Color } from "../../config/constants/Colors";

export const ItemDetailCard = ({
  item,
  onAddToCart,
  onSelectTopping,
  quantity,
}: ItemDetailCardProps) => (
  <Card
    image={item.img_url}
    title={item.name}
    subtitle={`$${item.price}`}
    style={{ marginHorizontal: 16 }}
  >
    <ThemedText>{item.description}</ThemedText>
    {/* Render toppings */}
    <View style={{ marginTop: 10 }}>
      {item.toppings?.map((topping) => (
        <TouchableOpacity
          key={topping.id}
          onPress={() => onSelectTopping(topping)}
        >
          <ThemedText>- {topping.name}</ThemedText>
        </TouchableOpacity>
      ))}
    </View>

    {/* Quantity and add to cart */}
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <Text>Quantity: {quantity}</Text>
      <TouchableOpacity onPress={onAddToCart}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  </Card>
);
