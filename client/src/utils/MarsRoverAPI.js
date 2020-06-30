import axios from "axios";
const baseURL = "https://api.nasa.gov/";
const apikey = "api_key=OsxKBADdC2NEduQmMsJU9kxQTfLlc2vQYdtC4XFE";
const marsRoverApiQuery = "mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&"

export default {
    MARSROVERapiSearch: function(){
        return axios.get(baseURL + marsRoverApiQuery + apikey);
    }
};


