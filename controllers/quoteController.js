const db = require('../models')

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Quote.find(req.query)
      .sort({ date: -1 })
      .then(dbQuote => res.json(dbQuote))
      .catch(err => res.status(422).json(err))
  },
  findById: function (req, res) {
    db.Quote.findById(req.params.id)
      .then(dbQuote => res.json(dbQuote))
      .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    db.Quote.create(req.body)
      .then(dbQuote => res.json(dbQuote))
      .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.Quote.findById({ _id: req.params.id })
      .then(dbQuote => dbQuote.remove())
      .then(dbQuote => res.json(dbQuote))
      .catch(err => res.status(422).json(err))
  }
}
