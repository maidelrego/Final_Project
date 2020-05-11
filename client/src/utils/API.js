import axios from 'axios'

export default {
  // Gets all books
  getQuotes: function () {
    return axios.get('/api/quotes')
  },
  // Gets the book with the given id
  getQuote: function (id) {
    return axios.get('/api/quotes/' + id)
  },
  // Deletes the book with the given id
  deleteQuote: function (id) {
    return axios.delete('/api/quotes/' + id)
  },
  // Saves a book to the database
  saveQuote: function (quoteData) {
    return axios.post('/api/quotes', quoteData)
  }
}
