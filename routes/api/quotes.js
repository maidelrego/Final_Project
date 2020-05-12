const router = require('express').Router()
const quoteController = require('../../controllers/quoteController')

// Matches with "/api/quotes"
router
    .route('/')
    .get(quoteController.findAll)
    .post(quoteController.create)

// Matches with "/api/quotes/:id"
router
    .route('/:id')
    .get(quoteController.findById)
    .delete(quoteController.remove)

module.exports = router