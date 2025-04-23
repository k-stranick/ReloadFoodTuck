import { useWindowDimensions } from "react-native";
import { UseResponsiveColumnsOptions } from "../config/types/ResponsiveColumns.types";

/**
 * useResponsiveColumns Hook
 * 
 * This custom React hook calculates the optimal number of columns for a responsive layout
 * based on the current window width. It ensures the number of columns stays within the
 * specified minimum and maximum limits.
 * 
 * @param options - Configuration options for the responsive columns.
 * @param options.minWidth - The minimum width (in pixels) required for a single column (default: 200).
 * @param options.minColumns - The minimum number of columns allowed (default: 1).
 * @param options.maxColumns - The maximum number of columns allowed (default: 4).
 * 
 * @returns The calculated number of columns, constrained between `minColumns` and `maxColumns`.
 * 
 * @example
 * // Usage in a component
 * const numColumns = useResponsiveColumns({ minWidth: 250, minColumns: 2, maxColumns: 6 });
 * 
 * return (
 *   <FlatList
 *     data={items}
 *     numColumns={numColumns}
 *     renderItem={({ item }) => <ItemCard item={item} />}
 *   />
 * );
 */
export function useResponsiveColumns(options: UseResponsiveColumnsOptions) {
    // Destructure options with default values
    const { minWidth = 200, minColumns = 1, maxColumns = 4 } = options || {};

    // Get the current window width
    const { width } = useWindowDimensions();

    // Calculate the raw number of columns based on the window width and minimum column width
    const rawColumns = Math.floor(width / minWidth);

    // Constrain the number of columns between the minimum and maximum limits
    return Math.max(minColumns, Math.min(rawColumns, maxColumns)); // Ensure the value is between minColumns and maxColumns
}