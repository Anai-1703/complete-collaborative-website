import { fetchAPI } from "./fetchAPI.js";

export default async function getUser(userId, token) {
    const result = await fetchAPI(`/users/${userId}`, "get", null, token);
    return result.data;
}
