const express = require("express");
const path = require("path");
const bp = require("body-parser");
const routes = require("./router");

const app = express();
app.use(bp.json());
app.use(express.static(path.join(__dirname, "/client/dist/client")))



routes.router(app);

app.listen(8000, function(){
    console.log("gucci");
})