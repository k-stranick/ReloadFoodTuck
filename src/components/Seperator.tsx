import { View, StyleSheet } from "react-native";

export function StyleSeparator(): JSX.Element {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 16, // vertical gap between items
  },
});
