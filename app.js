const express = require("express");
const app = express();

const testRoute = require("./routes/test");

app.use("/test", testRoute);

app.use("/", (request, response) => {
    response.status(400).json({ // Return a 400 response (Bad Request)
        "message": "No route specified"
    });
});

module.exports = app;