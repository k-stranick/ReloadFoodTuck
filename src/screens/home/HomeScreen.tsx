import { View, ImageBackground, Pressable } from "react-native";
import { ThemedText } from "../../components/ThemedText";
import { styles } from "./HomeScreen.style";

//ADD SAFEAREAVIEW
const HomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={{
        uri: "https://bswenfhypijyumpbwhti.supabase.co/storage/v1/object/public/reload-assets/theTruck.jpg",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ThemedText type="title" style={{ color: "white" }}>
          The Reload Food Truck!
        </ThemedText>
        <Pressable
          onPress={() => navigation.navigate("Cart")}
          style={styles.orderButton}
        >
          <ThemedText type="defaultSemiBold" style={{ fontWeight: 800 }}>
            Create Order
          </ThemedText>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
