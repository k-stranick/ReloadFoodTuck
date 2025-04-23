import { Topping } from "../config/types/Product.types";


// toggle by matching on joinId for defaults, on id for extras
// This file provides utility functions to toggle the `selected` state of toppings
// in a list. The logic differs for default toppings and extra toppings.

/**
 * Toggles the `selected` state of a default topping in the list.
 * Default toppings are identified by their `joinId` property.
 * 
 * @param toppings - The array of toppings to update.
 * @param topping - The specific topping to toggle.
 * @returns A new array of toppings with the `selected` state of the specified topping toggled.
 */
export function toggleDefaultToppingSelection(toppings: Topping[], topping: Topping): Topping[] {
    return toppings.map((t) =>
        t.joinId === topping.joinId ? { ...t, selected: !t.selected } : t
    );
}

/**
 * Toggles the `selected` state of an extra topping in the list.
 * Extra toppings are identified by their `id` property.
 * 
 * @param toppings - The array of toppings to update.
 * @param topping - The specific topping to toggle.
 * @returns A new array of toppings with the `selected` state of the specified topping toggled.
 */
export function toggleExtraToppingSelection(toppings: Topping[], topping: Topping): Topping[] {
    return toppings.map((t) =>
        t.id === topping.id ? { ...t, selected: !t.selected } : t
    );
}
