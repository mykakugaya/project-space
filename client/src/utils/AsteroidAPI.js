import axios from "axios";
import moment from "moment"
const baseURL = "https://api.nasa.gov/";
const apikey = "&api_key=OsxKBADdC2NEduQmMsJU9kxQTfLlc2vQYdtC4XFE";
const asteroidApiQuery = "neo/rest/v1/feed?start_date="
const currentday = moment().format("YYYY-MM-DD");

export default {
    ASTEROIDapisearch: function(){
        return axios.get(baseURL + asteroidApiQuery + currentday + apikey);
    }
};
