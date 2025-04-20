import React from "react";
import { Image, StyleSheet, StyleProp, ViewStyle, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Color } from "../config/constants/Colors";

type CardProps = {
  title?: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
  // onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  padding?: number;
  margin?: number;
  titleTextType?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  subtitleTextType?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link";
  textColor?: string;
};

/**
 * A reusable Card component that displays an optional image, title, subtitle, and any children content.
 * The card can also be made pressable if an `onPress` handler is provided.
 *
 * Props:
 * @param {string} [title] - Optional title text to display at the top of the card.
 * @param {string} [subtitle] - Optional subtitle text to display below the title.
 * @param {string} [image] - Optional image URL to be displayed at the top of the card.
 * @param {React.ReactNode} [children] - Optional additional content or components to render inside the card.
 * @param {() => void} [onPress] - Optional function to handle press events. If provided, the card becomes touchable.
 * @param {StyleProp<ViewStyle>} [style] - Optional additional styling for the card container.
 * @param {number} [padding=16] - Padding inside the card. Default is 16.
 * @param {number} [margin=12] - Margin around the card. Default is 12.
 *
 * @returns {JSX.Element} A stylized card component that supports layout customization and interactivity.
 *
 * Usage:
 * ```tsx
 * <Card
 *   title="Welcome"
 *   subtitle="Glad you're here"
 *   image="https://example.com/image.jpg"
 *   onPress={() => console.log('Card pressed')}
 * >
 *   <Text>Card content goes here</Text>
 * </Card>
 * ```
 */
export const Card = ({
  title,
  subtitle,
  image,
  children,
  // onPress,
  style,
  padding = 16,
  margin = 12,
  titleTextType = "default",
  subtitleTextType = "subtitle",
  textColor,
}: CardProps): JSX.Element => {
  const content = (
    <ThemedView style={[styles.card, { padding, margin }, style]}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {title && (
        <ThemedText color={textColor} type={titleTextType}>
          {title}
        </ThemedText>
      )}
      {subtitle && (
        <ThemedText color={textColor} type={subtitleTextType}>
          {subtitle}
        </ThemedText>
      )}
      {children}
    </ThemedView>
  );

  return <View>{content}</View>;
};

const styles = StyleSheet.create({
  card: {
    // overflow: "hidden",
    borderRadius: 16,
    maxWidth: 380,
    backgroundColor: Color.CARD,
    // borderColor: Color.BORDER,
    // borderWidth: 4,
    // Android shadow
    elevation: 5,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
});
