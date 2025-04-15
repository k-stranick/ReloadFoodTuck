import { Text, TextProps, StyleSheet } from "react-native";
import { Color } from "../../../constants/Colors";

type ThemedTextProps = TextProps & {
  // lightColor?: string;
  // darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

/**
 * A customizable text component with themed styles for common text types.
 *
 * `ThemedText` extends the base `Text` component from React Native and adds support
 * for predefined visual styles such as `title`, `subtitle`, and `link`.
 * It also preserves all standard `TextProps`.
 *
 * Props:
 * @param {"default" | "title" | "defaultSemiBold" | "subtitle" | "link"} [type="default"]
 * - Optional text type to apply predefined styles. Defaults to "default".
 * @param {TextProps} rest - All standard React Native `Text` component props (e.g., `numberOfLines`, `onPress`, `style`).
 *
 * @returns {JSX.Element} A styled `Text` component with consistent theme-based formatting.
 *
 * Example usage:
 * ```tsx
 * <ThemedText type="title">Welcome to the App</ThemedText>
 * <ThemedText type="link" onPress={() => navigate('Help')}>Need Help?</ThemedText>
 * ```
 */
export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: Color.TEXT,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    color: Color.TEXT,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
    color: Color.TEXT,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.TEXT,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: Color.LINK,
  },
});
