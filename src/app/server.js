const express = require("express");

const app = express();

app.use(express.static("./dist/Class-Project/"));

app.get("/*", (req, res) => res.sendFile("inde.heml", { root: "dist/Class-Project"}));

app.listen(process.env.PORT || 8080);
