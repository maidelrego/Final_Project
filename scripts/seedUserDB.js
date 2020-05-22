const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  "mongodb://jacki:password12@ds049661.mlab.com:49661/heroku_fhfzv9gh",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

const UserSeed = [
  {
    username: "admin",
    password: "jacki",
    role: "admin",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(UserSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
