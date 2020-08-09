const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).json({ // Return a 200 response (OK)
        "message": "This is working with the test route!"
    });
});

module.exports = router;