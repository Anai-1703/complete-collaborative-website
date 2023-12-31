"use strict";
const {
    checkVote,
    toggleVote,
    createVote,
    deleteVote,
} = require("../../services/dbService");
const { generateUUID } = require("../../services/cryptoServices.js");

// Traer getConnection dela base de datos// PROBAR CUANDO TENGAMOS LA BBDD CON DATOS
const errorService = require("../../services/errorService");

module.exports = async (idPost, idUser, userVote) => {
    const voteExist = await checkVote(idPost, idUser);
    if (voteExist.length === 0) {
        // No hay voto existente, así que creamos un nuevo voto.
        const vote = {
            id: generateUUID(),
            idUser: idUser,
            idPost: idPost,
            userVote: userVote ? 1 : 0, // Convertimos el voto a 1 o 0 según sea true o false.
        };
        return await createVote(vote);
    }

    if (voteExist[0].votes == 1) {
        voteExist[0].votes = true;
    }

    if (voteExist[0].votes == 0) {
        voteExist[0].votes = false;
    }

    // Ya hay un voto existente, verifiquemos si necesitamos hacer un toggle o eliminarlo.
    if (voteExist[0].votes === userVote) {
        await deleteVote(idPost, idUser);
    } else {
        await toggleVote(idPost, idUser, userVote ? 1 : 0); // Convertimos el voto a 1 o 0 según sea true o false.
    }
};
