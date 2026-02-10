const path = require("path");
const express = require("express");

const authRotes = require("./routes/auth.routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use(authRotes); // with 'use' method we add middleware that will be triggered for every incoming request

app.listen(3000);
