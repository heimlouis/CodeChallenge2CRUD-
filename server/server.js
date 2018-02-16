const express = require( 'express' );
const app = express();
const path = require( 'path' );
const pool = require('./modules/pool');

const port = process.env.PORT || 5000;

const bodyParser = require( 'body-parser' );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));
app.use(bodyParser.json());

const jokeRouter = require('./routes/joke.router');
app.use('/joke', jokeRouter);

app.listen(port, function(){
  console.log('server running on: ', port);
}); // end spin up server
