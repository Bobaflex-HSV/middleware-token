const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const port = 3000;


const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'token_authentication',
  password: 'jx5kwch6',
  port: 5432,
});



app.use(bodyParser.urlencoded({
    extended: true
  }));

  // define 'secure' middleware for token verification
const secure = (req, res, next) => {
    const {token} = req.params
    if (token && token.length) {
     res.send('There is a token! And this is what it says: ' + token);
    return;}
    else {
        res.sendStatus(403);}
 }

// root endpoint definition
app.get('/', (req, res) => { 
  pool.query('SELECT * FROM public.user WHERE id = $1', [1], (err, res) => {
    if (err) {
      throw err
    }
    console.log('user:', res.rows[0])
  })
  res.send('Hello World! I am a path to /')})

// token endpoint definition
app.get('/:token', secure);

app.listen(port, () => console.log(`Server running and listening at http://localhost:${port}...`))