const express = require("express");
const mongoose = require("mongoose");
//const routes = require("./routes");
//const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
//const concurrently = require('concurrently');
//const isEmpty = require('is-empty');
//const jsonwebtoken = require('jsonwebtoken');
const passport = require('passport');
//const passportJwt = require('passport-jwt');
//const validator = require('validator');

const users = require("./routes/api/users");
const app = express();
const PORT = process.env.PORT || 3001;

//bodyparser middleware
app.use(bodyParser.urlencoded({
  extended: false
})
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//db config
const db = require("./config/keys").mongoURI;

// Add routes, both API and view
app.use(passport.initialize());

require("./config/passport") (passport);

app.use("../routes/api/users", users);

// Connect to the Mongo DB
mongoose.connect(db, { useNewUrlParser: true } )
.then(() => console.log("MongoDb successfully connected"))
.catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});