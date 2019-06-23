const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');


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

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

//db config
const db = require("./config/keys").mongoURI;

// Connect to the Mongo DB
mongoose.connect(db, { useNewUrlParser: true } )
.then(() => console.log("MongoDb successfully connected"))
.catch(err => console.log(err));

//let Message = mongoose.model('Message', { name: String, message: String});

// Add routes, both API and view
app.use(passport.initialize());

require("./config/passport") (passport);

app.use("/api/users", users);

//Serve static assets if in production


const PORT = process.env.PORT || 5000;

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});