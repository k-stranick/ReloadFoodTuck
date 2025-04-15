// import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../../../constants/Colors";

type IconProps = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  size?: number;
  color?: string;
  style?: object;
};

/**
 * A reusable wrapper for the Ionicons component from `@expo/vector-icons`.
 * Allows simplified usage of icons with optional size, color, and styling props.
 * Defaults to a standard size and inactive navigation color if not provided.
 *
 * Props:
 * @param {Ionicons['name']} name - The name of the Ionicon to display (e.g., 'home', 'menu', 'chevron-forward-outline').
 * @param {number} [size=24] - Optional size of the icon in pixels. Default is 24.
 * @param {string} [color=Color.NAV_ICON_INACTIVE] - Optional color of the icon. Defaults to the app's inactive nav color.
 * @param {object} [style] - Optional style object to further customize the icon appearance.
 *
 * @returns {JSX.Element} A rendered Ionicon component.
 *
 * Example usage:
 * ```tsx
 * <Icon name="home" size={30} color="#ff9900" />
 * ```
 */
export const Icon = ({
  name,
  size = 24,
  color = Color.NAV_ICON_INACTIVE,
  style,
}: IconProps) => {
  return <Ionicons name={name} size={size} color={color} style={style} />;
};
