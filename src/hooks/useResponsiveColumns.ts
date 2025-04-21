import { useWindowDimensions } from "react-native";
import { UseResponsiveColumnsOptions } from "../config/types/ResponsiveColumns.types";

export function useResponsiveColumns(options: UseResponsiveColumnsOptions) {
    const { minWidth = 200, minColumns = 1, maxColumns = 4 } =
        options || {};

    const { width } = useWindowDimensions();
    const rawColumns = Math.floor(width / minWidth);

    return Math.max(minColumns, Math.min(rawColumns, maxColumns)); // between min and max columns
}