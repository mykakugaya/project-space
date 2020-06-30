import axios from "axios";
const BASEURL = "https://images-api.nasa.gov/search?q=";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
