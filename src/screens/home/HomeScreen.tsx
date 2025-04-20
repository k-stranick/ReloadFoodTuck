import { View, StyleSheet, ImageBackground, Pressable } from "react-native";
import { ThemedText } from "../../components/ThemedText";

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
          style={{
            backgroundColor: "#FF6347",
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
        >
          <ThemedText style={{ color: "white", fontSize: 18 }}>
            {" "}
            //TODO Create Order
          </ThemedText>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
