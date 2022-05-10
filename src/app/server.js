const express = require("express");

const app = express();

app.use(express.static("./dist/Class-Project"));

app.get("/*", (_, res) => res.sendFile("index.html", { root: "dist/Class-Project/"}));

app.listen(process.env.PORT || 8080);
