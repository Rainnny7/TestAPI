const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).json({ // Return a 200 response (OK)
        "message": "This is working with the test route!"
    });
});

router.get("/testing", (request, response) => {
    const text = request.header("text");
    if (text == null) {
        response.status(400).json({ // Return a 400 response (Bad Request)
            "error": "Text is null"
        });
    } else {
        response.status(200).json({ // Return a 200 response (OK)
            "message": "typed: " + text
        });
    }
});

module.exports = router;