import axios from "axios";

export default {
  // Gets all books
  postUser: function (formData) {
    console.log("formData==>",
      formData);
    return axios.post("/api/login/", formData,  )
   
  },
  getUser: function (id) {
    console.log(id);
    return axios.get("/api/dashboard/" + id)
    
  }
}