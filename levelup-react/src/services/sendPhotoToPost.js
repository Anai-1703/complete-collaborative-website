import { fetchAPI } from "./fetchAPI";

export async function sendPhotoToPost(photo, postId, token) {
    try {
        console.log(photo);
        console.log(postId);

        const response = await fetchAPI(
            `/posts/${postId}/photos`,
            "PUT",
            photo,
            token
        );
        console.log(response);
        return response;
    } catch (error) {
        throw new Error("Error al enviar la foto al post: " + error.message);
    }
}
