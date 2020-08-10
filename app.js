const express = require("express");
const app = express();

app.use("/test", require("./routes/test"));

app.use("/", (request, response) => {
    response.status(400).json({ // Return a 400 response (Bad Request)
        "error": "No route specified"
    });
});

module.exports = app;