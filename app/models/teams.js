const mysql_mongo = require('mysql-mongo-db')
const mysql = mysql_mongo.createDB('MySQL')

// load the auth variables
var configAuth = require('../config/auth'); // use this one for testing
// load the database variables
var configAuth = require('../config/database'); // use this one for testing

// Connection to mysql

let config = { host: 'localhost', user: 'root', pass: '<password>', db: 'parlay_golfer_db' }

mysql.connect(config, err => {
  if(err) throw err
  console.log(`Connected in ${config.host}/${config.db}`)
});

// Connection to mongodb
// let config3 = { host: 'localhost', user: 'root', port: 27017, pass: 'Peruluv2', db: 'User' }
// mongodb.connect(config3, err => {
//   if(err) throw err
//   console.log(`Connected in ${config3.host}/${config3.db}`)
// });

// CRUD mysql
// let valuesToInsert = {name: 'John Doe'}
// mysql.insert('teams', valuesToInsert, (err, res) => {
//   if (err) throw err
//   console.log(res)
// });
 
// let valuesToUpdate = {name: 'Team JS Awesome',}
// let updateParams = {where: 'id = 1' and: 'name = Team Benji'}
// mysql.update('my_table', valuesToUpdate, updateParams, (err, res) => {
//   if (err) throw err
//   console.log(`Changed rows: ${res.changedRows}`)
//   t.end()
// });

// This will get all the rows of my_table
mysql.select('teams', null, null, (err, res, fields) => {
    if (err) throw err
    console.log(`Num results: ${res.length}`)
  });
   
  // This will get all the data with specific columns 
//   let columns = ['nombre', 'edad'] // Must be an array
//   mysql.select('my_table', columns, null, (err, res, fields) => {
//     if (err) throw err
//     console.log(`Num results: ${res.length}`)
//   })
   
  // This will get all the data with specific columns and the params
//   let selectParams = {where: 'id_pruebas > 1'}
//   mysql.select('my_table', columns, selectParams, (err, res, fields) => {
//         if (err) throw err
//         console.log(`Num results: ${res.length}`) 
//       })