const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Quote schema
const quoteSchema = new Schema({
  date: { type: Date, default: Date.now },
      firstName: { type: String },
      lastName: { type: String },
      phone: {
        type: String
      },
      email: {
        type: String
      },
      address: {
        type: String
      },
      address2: {
        type: String
      },
      city: {
        type: String
      },
      state: {
        type: String
      },
      zipCode: {
        type: Number
      },
      doorKit: {
        type: String
      },
      finishColor: {
        type: String
      },
      doorDesign: {
        type: String
      },
      handle: {
        type: String
      },
      delivery: {
        type: String
      },
      installation: {
        type: String
      },
      doorMeasurements: {
        type: String
      }
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
