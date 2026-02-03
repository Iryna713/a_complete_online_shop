const express = require("express");

const authRotes = require("./routes/auth.routes");

const app = express();

app.use(authRotes); // with 'use' method we add middleware that will be triggered for every incoming request

app.listen(3000);
