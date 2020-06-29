import axios from "axios";
const BASEURL = "https://api.linkedin.com/v1/job-search?";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};