const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

// Quote schema
const contactSchema = new Schema({
  name: { type: String },
  emailMessage: { type: String },
  message: { type: String },
  date: { type: String, default: Date.now },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// sets the date parameter eqaul to the current or local time
// created_at and updated_at were added to app to index entries to require effeciency
// created_at and updated_at are stored in default which is in milliseconds
contactSchema.pre("save", function (next) {
  event = new Date();
  now = moment(event).format("LLLL");
  this.date = now;
  if (!this.date) {
    this.date = now;
  }
  next();
});
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
