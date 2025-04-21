/**
 * `apiConfig` defines a centralized map of API endpoint configurations used throughout the app.
 * 
 * Each entry includes the base URL, HTTP method, and optional headers for a specific API action.
 * This configuration is used by fetch wrappers (e.g., `universalFetch`) to simplify and standardize API calls.
 *
 * Endpoints:

 *
 * The `as const` assertion ensures the object is deeply immutable and preserves literal types.
 *
 * Example usage:
 * ```ts
 * const { url, method } = apiConfig.weatherForecast;
 * fetch(url, { method });
 * ```
 */

export const apiConfig = {
    foodMenuQuick: {
        url: "https://snowy-morning-71c7.kyle-stranickschool.workers.dev/api/menu-items",
        method: "GET",
    },
    menu_item_toppings: {
        url: "https://snowy-morning-71c7.kyle-stranickschool.workers.dev/api/menu_item_toppings",
        method: "GET",
    },
    additionalToppings: {
        url: "https://snowy-morning-71c7.kyle-stranickschool.workers.dev/api/additional_toppings",
        method: "GET",
    },
    sauces: {
        url: "https://snowy-morning-71c7.kyle-stranickschool.workers.dev/api/sauces",
        method: "GET",
    },
    postExample: {
        url: "https://api.example.com/post",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    },
} as const;
