import { images } from "../../assets/images";
import { styles } from "./ItemCard.style";
import { ItemCardProps } from "../../types/interfaces/products/Product.types";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";

//TODO:RENAME addToCart and onPress to be more descriptive for card press and add to cart or button display and press and add to cart

export function ItemCard(props: Readonly<ItemCardProps>) {
  const { item, handlePress, handleButton } = props;

  const handleCardPress = () => {
    if (handlePress) handlePress();
  };

  const handleAddToCart = (e: any) => {
    e.stopPropagation();
    if (handleButton) handleButton(item);
  };

  return (
    <Pressable style={styles.card} onPress={handleCardPress}>
      {renderCardContent(item, handleButton ? handleAddToCart : undefined)}
    </Pressable>
  );
}

function renderCardContent(
  item: ItemCardProps["item"],
  handleAddToCart?: (e: any) => void
) {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={images[item.image]}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>

        {handleAddToCart && (
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    // Let FlatList + numColumns control the width
    flex: 1,
    margin: 8,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#ccc",

    // Basic shadow/elevation for Android + iOS
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,

    // Align content
    alignItems: "center",
  },

  imageContainer: {
    // fill width of the card
    width: "100%",
    // keep aspect ratio
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 8,
  },

  image: {
    width: "100%",
    height: "100%",
    // resizeMode: "contain",
  },

  textContainer: {
    marginTop: 8,
    alignItems: "center",
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    textAlign: "center",
  },

  price: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },

  addButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
