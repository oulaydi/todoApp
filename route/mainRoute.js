const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({
        message: "Welcom to My REST API /login to list your todos",
    });
});

module.exports = router;
