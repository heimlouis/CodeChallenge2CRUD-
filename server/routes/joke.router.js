const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const pool = require('../modules/pool');

//start router.get jokes
router.get('/', function(request, response){
  console.log('in router.get jokes');
  const sqlText = `SELECT * FROM jokes ORDER BY id asc`;
pool.query(sqlText)
  .then(function(result){
    console.log('got results', result.rows);
    response.send(result.rows);
  })
  .catch(function(error){
    console.log('error on get in router', error);
    response.sendStatus(500);
  })
})//end router.get jokes
router.post('/', function(request, response){

})
//start router.post jokes
router.push('/', function )
//end router.post jokes

//start router.put jokes

//end router.put jokes

module.exports = router;