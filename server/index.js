const express = require("express");
const generatePassword = require("password-generator");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Put all API endpoints under '/api'
app.get("/api/passwords", (req, res) => {
    const count = 5;

    // Generate some passwords
    const passwords = Array.from(Array(count).keys()).map((i) =>
        generatePassword(12, false)
    );

    // Return them as json
    res.json(passwords);

    console.log(`Sent ${count} passwords`);
});

/*
if (process.env.NODE_ENV === "production") {
    // All other GET requests not handled before will return our React app
    const path = require("path");

    // Have Node serve the files for our built React app
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}*/

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
