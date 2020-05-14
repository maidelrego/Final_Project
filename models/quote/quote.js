const mongoose = require('mongoose')
// const addressValidator = require('address-validator')
// const _ = require('underscore')
const Schema = mongoose.Schema

function validPhoneNum (v) {
  return /\d{3}-\d{3}-\d{4}/.test(v)
}
function validEmail (v) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
}

const validatePhone = [validPhoneNum, `Is not,${Quote.Phone} a phone number`]
const validateEmail = [validEmail, `Is not, ${Quote.Email} an email`]

let addressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  country: 'US'
})

// Quote schema
const quoteSchema = new Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Phone: {
    type: String,
    validate: validatePhone,
    required: 'Phone number is required'
  },
  Email: {
    type: String,
    required: 'Email is required',
    unique: true,
    trim: true,
    validate: validateEmail
  },
  Address: {
    type: addressSchema,
    required: true
  },
  Door: {
    type: String,
    // min: [12, 'too few inches'],
    // max: 100,
    required: true
  },
  Finish: {
    type: String,
    // enum: ['white stain', 'medium brown stain', 'grey', 'white', 'easter blue'],
    required: true
  },
  Glass: {
    type: Boolean
  },
  Hardware: {
    type: String,
    required: true
  },
  Design: {
    type: String,
    reuired: true
  },
  Delivery: {
    type: Boolean
  },
  Installation: {
    type: Boolean
  },
  date: { type: Date, default: Date.now }
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote
