import { Item, Topping } from "../config/types/Product.types";
import { universalFetch } from "../services/fetchApi";
import { useEffect, useState } from "react";


export function useToppings(item: Item) {
    const [removeToppings, setRemoveToppings] = useState<Topping[]>([]);
    const [addToppings, setAddToppings] = useState<Topping[]>([]);

    useEffect(() => {
        const addOnlyIds = [6, 7, 10]; // Wings & Tenders
        const isAddOnly = addOnlyIds.includes(item.id);
        const noAddIds = [1, 2, 3, 4, 5]; //fries and mozz sticks
        const isNoAdds = noAddIds.includes(item.id);

        async function load() {
            // fetch only the defaults from the join table
            const defaults =
                (await universalFetch<Topping[]>("menu_item_toppings", {
                    itemId: item.id.toString(),
                })) ?? [];

            setRemoveToppings(
                defaults.map((t) => ({
                    ...t,
                    default: true,
                    selected: false,
                }))
            );

            // fetch add‑able options:
            //   if it’s a sauce‑only item hit /api/sauces
            //   otherwise hit /api/additional_toppings
            if (isNoAdds) {
                setAddToppings([]);
            } else {
                const adds =
                    (await universalFetch<Topping[]>(
                        isAddOnly ? "sauces" : "additionalToppings"
                    )) ?? [];

                setAddToppings(
                    adds.map((t) => ({
                        ...t,
                        default: false,
                        selected: false,
                    }))
                );
            }
        }

        load();
    }, [item])

    return {
        removeToppings,
        setRemoveToppings,
        addToppings,
        setAddToppings,
    }
}