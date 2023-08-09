const { deletePhotoByPostId } = require("../../services/dbService");
const fileService = require("../../services/fileServices");

async function deletePhoto(postId, photoId, dbPhoto) {
    try {
        console.log("Campos de deletephoto");
        console.log(postId);
        await fileService.deleteFile(postId);
        await deletePhotoByPostId(postId);
    } catch (error) {
        console.error("Error deleting photo:", error);
        throw error;
    }
}

module.exports = deletePhoto;
