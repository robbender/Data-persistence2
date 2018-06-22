// module imports
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const Sequelize = require('sequelize');
const app = express();
const passport = require('passport');
const handlebars = require('express-handlebars').create({ defaultlayout: 'main' });
const router = express.Router();
const models = require('./models')

const db = new sqlite3.Database("/Users/Louis828/Desktop/Robert 3.23.17 PM/Documents/My School/coderCamps/nodeJS/handsOn/DataPersistence6/Chinook_Sqlite_AutoIncrementPKs.sqlite3", (err) => console.log(err));

// Models
// models.users.findOne().then(users => {
//   console.log('users')
// })

// Search Users
models.users.findOne({
      where: {
        userName: 'Robb'
      }
  }).then(users => {
    console.log('users')
})

// Build Users
const users = models.users.build({
    firstName: "John",
    lastName: "Doe",
    userName: "JohnnyD",
    password: "password1234",
})

// Save Users
users.save().then(newUser => {
    console.log(newUser)
})

// view engine
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.use(express.static(__dirname))

// use json format for req body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// connect to db
const sequelize = new Sequelize('nodeUserDB', 'robert', null, {
    host: 'localhost',
    dialect: 'sqlite',
    // storage: '/Users/Louis828/Desktop/Robert 3.23.17 PM/Documents/My School/coderCamps/nodeJS/js-backend2-master/Chinook_Sqlite_AutoIncrementPKs.sqlite'
    storage: '/Users/Louis828/Desktop/Robert 3.23.17 PM/Documents/My School/coderCamps/nodeJS/handsOn/node F I N A L /nodeFINAL6/nodeFInal4DB.db'
});

// define schema
const Artist = sequelize.define('Artist', {
      ArtistId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: Sequelize.STRING
},
{
    freezeTableName: true,
    timestamps: false
})

// ROUTING
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.get('/login', (req, res) => {
  res.render('login')
})

// run server on port 3000
var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})

// module.exports = Artist;
