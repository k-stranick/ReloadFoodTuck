/**
 * `apiConfig` defines a centralized map of API endpoint configurations used throughout the app.
 * 
 * Each entry includes the base URL, HTTP method, and optional headers for a specific API action.
 * This configuration is used by fetch wrappers (e.g., `universalFetch`) to simplify and standardize API calls.
 *
 * Endpoints:
 * @property {Object} weatherForecast - Retrieves 5-day weather forecast data for a given location.
 * @property {string} weatherForecast.url - Cloudflare Worker endpoint for forecast data.
 * @property {string} weatherForecast.method - HTTP method used (`GET`).
 *
 * @property {Object} weatherRealTime - Retrieves current real-time weather conditions.
 * @property {string} weatherRealTime.url - Cloudflare Worker endpoint for real-time data.
 * @property {string} weatherRealTime.method - HTTP method used (`GET`).
 *
 * @property {Object} hikingTrails - Returns trail data (name, distance, location, etc.).
 * @property {string} hikingTrails.url - Cloudflare Worker endpoint for hiking trails.
 * @property {string} hikingTrails.method - HTTP method used (`GET`).
 *
 * @property {Object} postExample - Example POST request to an external API.
 * @property {string} postExample.url - Placeholder API endpoint.
 * @property {string} postExample.method - HTTP method used (`POST`).
 * @property {Object} postExample.headers - Request headers for JSON payloads.
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
    weatherForecast: {
        url: "https://cool-silence-3cc3.kyle-stranickschool.workers.dev/",
        method: "GET",
    },
    weatherRealTime: {
        url: "https://long-bush-acb2.kyle-stranickschool.workers.dev/",
        method: "GET",
    },
    hikingTrails: {
        url: "https://blue-tooth-9322.kyle-stranickschool.workers.dev/api/trails",
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
