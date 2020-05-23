const express = require("express");
const passport = require("passport")
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser')
const session = require('express-session');
const app = express();
const routes = require('./routes/index');
const PORT = process.env.PORT || 3001;
const path = require("path");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/campbellwooddesigns");
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'ilovescotchscotchyscotchscotch'
}));
app.use(morgan('dev'))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use('/static', express.static(path.join(__dirname, './client/build//static')));
  app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, './client/build/')});
});

}
//  CORS auth
if (app.get('env') === 'development') {
  app.use(function(_, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/campbellwooddesigns",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
// // required for passport
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./config/passport.js')(passport);
app.use(routes);
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});