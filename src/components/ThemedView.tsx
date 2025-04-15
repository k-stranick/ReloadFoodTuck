import { View, ViewProps, StyleSheet } from "react-native";
import { Color } from "../../../constants/Colors";

type ThemedViewProps = ViewProps & {
  // lightColor?: string;
  // darkColor?: string;
  backgroundColor?: string;
};

/**
 * A themed wrapper around React Native's `View` component that provides a consistent background color
 * and styling with optional overrides. Commonly used as a base layout container.
 *
 * This component supports setting a custom background color and includes a default corner radius and
 * overflow behavior to ensure clean clipping of child content.
 *
 * Props:
 * @param {ViewProps} otherProps - All standard React Native `View` props (e.g., `onLayout`, `accessibilityLabel`, etc.).
 * @param {string} [backgroundColor] - Optional background color. If not provided, uses the app's default themed background.
 * @param {StyleProp<ViewStyle>} [style] - Optional custom styles applied on top of the base style.
 *
 * @returns {JSX.Element} A styled `View` component with default theming.
 *
 * Example usage:
 * ```tsx
 * <ThemedView backgroundColor="#f4f4f4" style={{ padding: 20 }}>
 *   <Text>Hello, World!</Text>
 * </ThemedView>
 * ```
 */
//adjusting the background color here overrides the default background color of the SafeAreaView
export function ThemedView({
  style,
  backgroundColor,
  // lightColor,
  // darkColor,
  ...otherProps
}: ThemedViewProps) {
  return (
    <View
      style={[
        styles.base,
        { backgroundColor: backgroundColor ?? Color.THEMED_VIEW }, //pass color or use default color
        style,
      ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    borderTopLeftRadius: 16,
    overflow: "hidden", // ensures content respects the border radius
  },
});
