const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const port = 3000;


app.use(bodyParser.urlencoded({
    extended: true
  }));

const secure = (req, res, next) => {
    const {token} = req.params
    if (token && token.length) {
     res.send('There is a token! And this is what it says: ' + token);
    return;}
    else {
        res.sendStatus(403);}
 }


app.get('/', (req, res) => res.send('Hello World! I am a path to /'))

app.get('/:token', secure);

app.listen(port, () => console.log(`Server running and listening at http://localhost:${port}...`))