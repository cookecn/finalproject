const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');


const users = require("./routes/api/users");
const app = express();

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

// Connect to the Mongo DB
mongoose.connect(db, { useNewUrlParser: true } )
.then(() => console.log("MongoDb successfully connected"))
.catch(err => console.log(err));

//let Message = mongoose.model('Message', { name: String, message: String});


app.get('/', )

// Add routes, both API and view
app.use(passport.initialize());

require("./config/passport") (passport);

app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});