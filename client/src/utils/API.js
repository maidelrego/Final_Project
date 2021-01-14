import axios from "axios";

export default {

  postUser: function (formData) {
    return axios.post("/api/login/", formData);
  },
  getUser: function (id) {
    return axios.get("/api/admin/" + id);
  },
  logout: function () {
    return axios.get("/api/logout");
  },

  getQuotes: function () {
    return axios.get("/api/quotes");
  },

  getQuote: function (id) {
    return axios.get("/api/quotes/" + id);
  },

  deleteQuote: function (id) {
    return axios.delete("/api/quotes/" + id);
  },

  saveQuote: function (quoteData) {
    return axios.post("/api/quotes", quoteData);
  },

  saveMessage: function (messageData) {
    return axios.post("/api/message", messageData);
  },

  getMessages: function () {
    return axios.get("/api/message");
  },
  getMessage: function (id) {
    return axios.get("/api/message/" + id);
  },
  deleteMessage: function (id) {
    return axios.delete("/api/message/" + id);
  },
};
