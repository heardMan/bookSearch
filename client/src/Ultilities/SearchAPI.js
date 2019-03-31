import axios from "axios";

export default {
  // Searches for books based on the input query
  searchBooks: function(query) {
    return axios.get("/api/search/" + query);
  }
};
