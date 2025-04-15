
import { apiConfig } from "./apiConfig";

type ApiKey = keyof typeof apiConfig;

// Match the config shape so TS knows headers may or may not be present
type ApiEndpoint = {
    url: string;
    method: string;
    headers?: Record<string, string>;
};


/**
 * `universalFetch` is a generic API request wrapper that uses the `apiConfig` object
 * to determine endpoint URL, HTTP method, and optional headers.
 * 
 * It supports optional query parameters and request bodies for both GET and POST requests,
 * and returns typed JSON responses.
 *
 * This utility simplifies API calls across the app by centralizing request logic and enforcing
 * consistency through the `apiConfig` structure.
 *
 * Type Parameters:
 * @template T - The expected shape of the JSON response. Returned as a Promise<T | null>.
 *
 * Parameters:
 * @param {ApiKey} apiKey - A key from `apiConfig` representing the desired API endpoint.
 * @param {Record<string, string>} [queryParams] - Optional object of query parameters to append to the URL.
 * @param {any} [body] - Optional request body, serialized as JSON. Used primarily with POST/PUT methods.
 *
 * Returns:
 * @returns {Promise<T | null>} Resolves with the parsed JSON response if successful, or `null` on error.
 *
 * Errors:
 * - Logs any fetch or HTTP errors to the console with the corresponding `apiKey`.
 * - Returns `null` on failure to promote safe optional chaining in consuming code.
 *
 * Example usage:
 * ```ts
 * const weather = await universalFetch<WeatherResponse>('weatherForecast', {
 *   location: '40.580,-111.629',
 * });
 * 
 * const result = await universalFetch<SubmitResponse>('postExample', undefined, {
 *   name: 'Kyle',
 *   score: 99,
 * });
 * ```
 */
export async function universalFetch<T>(
    apiKey: ApiKey,
    queryParams?: Record<string, string>,
    body?: any
): Promise<T | null> {
    const endpoint = apiConfig[apiKey] as ApiEndpoint;
    if (!endpoint) throw new Error(`API config for "${apiKey}" not found`);

    const { url, method = "GET", headers } = endpoint;

    const query = queryParams ? `?${new URLSearchParams(queryParams)}` : "";
    const fullUrl = `${url}${query}`;

    try {
        const response = await fetch(fullUrl, {
            method,
            headers: headers ?? {}, //fallback if headers is undefined
            ...(body && { body: JSON.stringify(body) }),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`[${apiKey}] fetch error:`, error);
        return null;
    }
}

