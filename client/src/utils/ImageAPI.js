import axios from "axios";
const BASEURL = "https://images-api.nasa.gov/search?media_type=image&q=";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
