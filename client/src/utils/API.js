import axios from "axios";
const baseURL = "https://api.nasa.gov/";
const apikey = "api_key=OsxKBADdC2NEduQmMsJU9kxQTfLlc2vQYdtC4XFE";
const APODapiquery = "planetary/apod?"

export default {
    APODapisearch: function(){
        return axios.get(baseURL + APODapiquery + apikey);
    }
};
