const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// If deployed, use the depoloyed databse
var MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://user1:password1@ds029817.mlab.com:29817/heroku_d2pmlmg4";
{
  useNewUrlParser: true;
}

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
