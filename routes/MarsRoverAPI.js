import axios from "axios";
const baseURL = "https://api.nasa.gov/";
const apikey = "api_key=OsxKBADdC2NEduQmMsJU9kxQTfLlc2vQYdtC4XFE";


export default {
    MARSROVERapiSearch: function(){
        return axios.get(baseURL + marsRoverApiQuery + apikey);
    }
};


