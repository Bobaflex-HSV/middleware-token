const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const port = 3000;

const secure = (res, req, next) => {
    console.log("In secure");
    next();
}

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use('/:token', secure);



app.get('/', (req, res) => res.send('Hello World!'))

app.get('/:token', (req, res) => {
    const {token} = req.params;
    res.send('Hello token:' + token)
}

)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))