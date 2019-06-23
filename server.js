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

let Message = mongoose.model('Message', { name: String, message: String});

app.get('/messages', (req, res) {
  Message.find({},(err, messages) => {
    res.send(messages);
  })
});

app.post('/messages', (req,res) {
  var message = new Message(req.body);
  message.save((err) => {
    if(err) 
      sendStatus(500);
      res.sendStatus(200);
  })
});

// Add routes, both API and view
app.use(passport.initialize());

require("./config/passport") (passport);

app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});