// import { View, Text, TouchableOpacity } from "react-native";
// import { ThemedText } from "../../components/ThemedText";
// import { Card } from "../../components/Card";
// import { ItemDetailCardProps } from "../../config/types/Product.types";
// import { Color } from "../../config/constants/Colors";

// export const ItemDetailCard = ({
//   item,
//   onAddToCart,
//   onSelectTopping,
//   quantity,
// }: ItemDetailCardProps) => (
//   <Card
//     image={item.img_url}
//     title={item.name}
//     subtitle={`$${item.base_price}`}
//     style={{ marginHorizontal: 16 }}
//   >
//     <ThemedText>{item.description}</ThemedText>
//     {/* Render toppings */}
//     <View style={{ marginTop: 10 }}>
//       {item.toppings?.map((topping) => (
//         <TouchableOpacity
//           key={topping.id}
//           onPress={() => onSelectTopping(topping)}
//         >
//           <ThemedText>- {topping.name}</ThemedText>
//         </TouchableOpacity>
//       ))}
//     </View>

//     {/* Quantity and add to cart */}
//     <View style={{ flexDirection: "row", marginTop: 10 }}>
//       <Text>Quantity: {quantity}</Text>
//       <TouchableOpacity onPress={onAddToCart}>
//         <Text>Add to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   </Card>
// );

import { FlatList, View, TouchableOpacity, Text } from "react-native";
import { ItemDetailCardProps } from "../../config/types/Product.types";
import { Card } from "../../components/Card";
import { ThemedText } from "../../components/ThemedText";
import { Color } from "../../config/constants/Colors";

export const ItemDetailCard = ({
  item,
  onAddToCart,
  onSelectTopping,
  quantity,
}: ItemDetailCardProps) => {
  const renderTopping = ({ item: topping }) => (
    <TouchableOpacity
      onPress={() => onSelectTopping(topping)}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
      }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderWidth: 1,
          borderColor: "#ccc",
          marginRight: 8,
          backgroundColor: topping.selected ? Color.PRIMARY : "white",
        }}
      />
      <ThemedText>
        {topping.name} {topping.price ? `($${topping.price.toFixed(2)})` : ""}
      </ThemedText>
    </TouchableOpacity>
  );

  return (
    <Card
      image={item.img_url}
      title={item.name}
      subtitle={`$${item.base_price}`}
      style={{ marginHorizontal: 16 }}
    >
      <ThemedText>{item.description}</ThemedText>

      {/* 🔥 Toppings */}
      <View style={{ marginTop: 12 }}>
        <ThemedText style={{ marginBottom: 6 }}>Toppings:</ThemedText>
        <FlatList
          data={item.toppings}
          keyExtractor={(topping) => topping.id.toString()}
          renderItem={renderTopping}
        />
      </View>

      {/* ✅ Quantity & Add to Cart */}
      <View
        style={{ flexDirection: "row", marginTop: 16, alignItems: "center" }}
      >
        <Text style={{ marginRight: 10 }}>Quantity: {quantity}</Text>
        <TouchableOpacity onPress={onAddToCart}>
          <Text
            style={{
              backgroundColor: Color.PRIMARY,
              color: "white",
              padding: 8,
              borderRadius: 6,
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};
