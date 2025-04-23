import { useEffect, useState } from "react";
import { universalFetch } from "../services/fetchApi";
import { Item } from "../config/types/Product.types";

/**
 * useMenuItems Hook
 * 
 * This custom React hook is used to fetch and manage the state of menu items for the application.
 * It handles the asynchronous fetching of menu items from the API and provides a loading state
 * to indicate whether the data is still being fetched.
 * 
 * @returns An object containing:
 * - `menuItems` (Item[]): An array of menu items fetched from the API.
 * - `loading` (boolean): A boolean indicating whether the menu items are still being loaded.
 * 
 * @example
 * // Usage in a component
 * const { menuItems, loading } = useMenuItems();
 * 
 * if (loading) {
 *   return <ActivityIndicator size="large" />;
 * }
 * 
 * return (
 *   <FlatList
 *     data={menuItems}
 *     keyExtractor={(item) => item.id.toString()}
 *     renderItem={({ item }) => <MenuItemCard item={item} />}
 *   />
 * );
 */
export function useMenuItems() {
  const [menuItems, setMenuItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const data = await universalFetch<Item[]>("foodMenuQuick");
        setMenuItems(data ?? []);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, []);

  return { menuItems, loading };
}