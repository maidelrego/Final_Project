const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/campbellwooddesigns"
);

const quoteSeed = [
  {
    date: new Date().setDate(new Date().getDate() - 10),
    quote: [
      {
        firstName: "Jessi",
        lastName: "Jacki",
        phone: "123-123-4567",
        email: "jessie@yahoo.vom",
        address: "123 SOmewhere",
        address2: "",
        city: "KC",
        state: "California",
        zipCode: 11234,
        Door: " 80 inches",
        finishColor: "white stain",
        doorKit: "rohmbic",
        doorDesign: "X's",
        handle: "black steel",
      },
    ],
  },
];

db.Quote.remove({})
  .then(() => db.Quote.collection.insertMany(quoteSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
