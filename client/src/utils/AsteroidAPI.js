import axios from "axios";
const baseURL = "https://api.nasa.gov/";
const apikey = "api_key=OsxKBADdC2NEduQmMsJU9kxQTfLlc2vQYdtC4XFE";
const APODapiquery = "neo/rest/v1/feed?start_date=2020-06-29&"

export default {
    ASTEROIDapisearch: function(){
        return axios.get(baseURL + APODapiquery + apikey);
    }
};
