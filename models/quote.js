const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Quote schema
const quoteSchema = new Schema({
  date: { type: Date, default: Date.now },
      firstName: { type: String },
      lastName: { type: String },
      phoneNumber: { type: Number },
      email: { type: String },
      address: { type: String },
      address2: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: Number },
      doorKit: {type: String },
      finishColor: { type: String },
      doorDesign: { type: String },
      handle: { type: String },
      delivery: { type: Boolean },
      installation: { type: Boolean },
      dimensionsH: { type: String },
      dimensionsW: { type: String }
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
