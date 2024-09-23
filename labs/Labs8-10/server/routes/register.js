const express = require('express');
const registerRouter = express.Router();

registerRouter.post("/", (req, res, next) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        console.log(username + password);
        res.status(200).json({ok: true});
    } catch (err) {
        next(err);
    }
});

module.exports = registerRouter;