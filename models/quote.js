const mongoose = require("mongoose");
// const addressValidator = require('address-validator')
// const _ = require('underscore')
const Schema = mongoose.Schema;

// function validPhoneNum (v) {
//   return /\d{3}-\d{3}-\d{4}/.test(v)
// }
// function validEmail (v) {
//   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
// }

// const validatePhone = [validPhoneNum, `Is not,${Quote.Phone} a phone number`]
// const validateEmail = [validEmail, `Is not, ${Quote.Email} an email`]

// let addressSchema = new Schema({
//   street: String,
//   city: String,
//   state: String,
//   country: 'US'
// })

// Quote schema
const quoteSchema = new Schema({
  date: { type: Date, default: Date.now },
  quote: [
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phone: {
        type: String,
        // validate:
        required: "Phone number is required",
      },
      email: {
        type: String,
        required: "Email is required",
        unique: true,
        trim: true,
        // validate:
      },
      address: {
        type: String,
        required: true,
      },
      address2: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: "Please enter a city",
      },
      state: {
        type: String,
        required: "Please enter the state",
      },
      zipCode: {
        type: Number,
        required: "Please enter as zip code",
      },
      doorKit: {
        type: String,
        // min: [12, 'too few inches'],
        // max: 100,
      },
      finishColor: {
        type: String,
        // enum: ['white stain', 'medium brown stain', 'grey', 'white', 'easter blue'],
      },
      doorDesign: {
        type: String,
      },
      handle: {
        type: String,
      },
      delivery: {
        type: String,
      },
      installation: {
        type: String,
      },
      doorMeasurements: {
        type: String,
      },
    },
  ],
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
