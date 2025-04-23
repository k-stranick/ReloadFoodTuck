import { Item, Topping } from "../config/types/Product.types";
import { universalFetch } from "../services/fetchApi";
import { useEffect, useState } from "react";
import { ADD_ONLY_IDS, NO_ADD_IDS } from "../config/constants/SpecificMenuItems";

type ToppingSetter = React.Dispatch<React.SetStateAction<Topping[]>>;

// Internal helper to format toppings consistently
const formatToppings = (toppings: Topping[], isDefault: boolean): Topping[] =>
  toppings.map(t => ({
    ...t,
    default: isDefault,
    selected: false,
  }));


/**
 * Fetches toppings data based on the item type and updates the state.
 * 
 * @param item - The menu item for which toppings are being fetched.
 * @param setRemoveToppings - State setter for removable toppings.
 * @param setAddToppings - State setter for additional toppings.
 */
async function fetchToppings(item: Item, setRemoveToppings: ToppingSetter, setAddToppings: ToppingSetter) {
  const itemId = item.id.toString(); // Convert item ID to string for API call
  const isAddOnly = ADD_ONLY_IDS.includes(item.id); // Check if the item is in the add-only list
  const isNoAdds = NO_ADD_IDS.includes(item.id);
  const endpoint = isAddOnly ? "sauces" : "additionalToppings";

  const defaultToppings = await universalFetch<Topping[]>("menu_item_toppings", { itemId }) ?? [];
  setRemoveToppings(formatToppings(defaultToppings, true)); // Format default toppings

  // Fetch additional toppings
  if (isNoAdds) {
    setAddToppings([]); // No additional toppings allowed
    return;
  }

  const additionalToppings = (await universalFetch<Topping[]>(endpoint)) ?? [];
  setAddToppings(formatToppings(additionalToppings, false)); // Format additional toppings
}


/**
 * useToppings Hook
 * 
 * This custom React hook manages the state and logic for handling toppings for a menu item.
 * It fetches both removable (default) and additional toppings based on the item type
 * and provides state management for selecting or deselecting toppings.
 * 
 * @param item - The menu item for which toppings are being managed.
 * 
 * @returns An object containing:
 * - `removeToppings` (Topping[]): An array of default toppings that can be removed.
 * - `setRemoveToppings` (function): A state setter function to update `removeToppings`.
 * - `addToppings` (Topping[]): An array of additional toppings that can be added.
 * - `setAddToppings` (function): A state setter function to update `addToppings`.
 */
export function useToppings(item: Item) {
  const [removeToppings, setRemoveToppings] = useState<Topping[]>([]);   // State for removable (default) toppings
  const [addToppings, setAddToppings] = useState<Topping[]>([]);  // State for additional toppings

  // Fetch toppings when the item changes
  useEffect(() => {
    fetchToppings(item, setRemoveToppings, setAddToppings);
  }, [item]);

  // Return the toppings state and their respective setters
  return {
    removeToppings, // Default toppings that can be removed
    setRemoveToppings, // Setter for removable toppings
    addToppings, // Additional toppings that can be added
    setAddToppings, // Setter for additional toppings
  };
}