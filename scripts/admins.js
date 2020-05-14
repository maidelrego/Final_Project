const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/campbellwooddesigns");

const admins = [
  {
    user: "admin1",
    password: "admin1"
  },
  {
    user: "admin2",
    password: "admin2"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(admins))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
