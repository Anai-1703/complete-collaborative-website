"use strict";

const { Router } = require("express");
const { json } = require("express");

const registerUser = require("../controllers/user/registerUser.js");
const loginUser = require("../controllers/user/loginUser.js");
const sendResponse = require("../utils/sendResponse.js");
const sendError = require("../utils/sendError.js");
const authGuard = require("../middlewares/authGuard.js");
const handleAsyncError = require("../services/handleAsyncError.js");
const validateBody = require("../middlewares/validateBody.js");
const registerPayload = require("../validators/registerPayload.js");
const { getUserById, getPostByUserId } = require("../services/dbService.js");
const { controlPanel } = require("../controllers/user/controlPanel.js");
const router = Router();

router.post("/register", json(), async (req, res) => {
    console.log("llegando al endpoint");
    const result = await registerUser(req.body);
    res.json(result);
    console.log("fin");
});

router.post("/login", json(), async (req, res) => {
    const token = await loginUser(req.body);
    sendResponse(res, { token });
});

router.get("/users/:id", json(), async (req, res) => {
    console.log(req.params.id);
    const user = await getUserById(req.params.id);
    const posts = await getPostByUserId(req.params.id);
    const userAndPost = [{ user }, { posts }];
    sendResponse(res, userAndPost, undefined, 201);
});

// EN DESARROLLO
router.put(
    "/users/:id",
    authGuard,
    json(),
    handleAsyncError(async (req, res) => {
        const userId = req.params.id;
        const userInfo = req.body;
        const info = await controlPanel(userId, userInfo);
        sendResponse(res, info, undefined, 201);
    })
);

// router.post("/users/register", json(), async (req, res) => {
//     validateBody(registerPayload);
//     handleAsyncError(async (req, res) => {
//         await registerUser(req.body);
//         sendResponse(res);
//     });
// });

router.get("/users", authGuard, (req, res) => {
    res.send("Listado usuarios");
});

router.patch("/users/:id", authGuard, json(), (req, res) => {
    res.json(req.body);
});

module.exports = router;
