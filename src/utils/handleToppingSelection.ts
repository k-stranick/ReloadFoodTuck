import { Topping } from "../config/types/Product.types";
import { toggleDefaultToppingSelection, toggleExtraToppingSelection } from "./toggleToppingSelection";

/**
 * Purpose: This function determines whether the selected topping is a default topping or an extra topping and updates the respective state (removeToppings or addToppings).
 * 
 * @param topping Topping to select or deselect
 * @param setRemoveToppings State setter for the removeToppings state
 * @param setAddToppings State setter for the addToppings state
 * @description
 * Logic:
 * If the topping is a default topping (t.default is true), it calls toggleDefaultToppingSelection to toggle the selected state of the topping in the removeToppings list.
 * If the topping is an extra topping (t.default is false), it calls toggleExtraToppingSelection to toggle the selected state of the topping in the addToppings list.
 */

export const handleSelectTopping = (
    topping: Topping,
    setRemoveToppings: React.Dispatch<React.SetStateAction<Topping[]>>, //https://stackoverflow.com/questions/71324797/react-typescript-what-does-dispatchsetstateactionboolean-stand-for
    setAddToppings: React.Dispatch<React.SetStateAction<Topping[]>> // These are the types for the state setters in the useToppings hook
) => {
    if (topping.default) {
        setRemoveToppings((toppingsForRemoval) =>
            toggleDefaultToppingSelection(toppingsForRemoval, topping)
        );
    } else {
        setAddToppings((toppingsToAdd) =>
            toggleExtraToppingSelection(toppingsToAdd, topping)
        );
    }
};