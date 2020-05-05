const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded());


const secure = (request, response, next) => {
    const token = request.params.token;
    console.log(token);
    if (token || token !== null) {
        response.send("Hello World")
    } if (!token || token === null) {
        console.log("hey");
    }
    next();
}


app.get("/:token", secure);


//app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log("server is working"));