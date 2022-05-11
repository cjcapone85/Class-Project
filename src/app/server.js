const express = require("express");

const app = express();

app.use(express.static("./dist/class-project"));

app.get("/*", (_, res) => res.sendFile("index.html", { root: "dist/class-project/"}));

app.listen(process.env.PORT || 8080);
