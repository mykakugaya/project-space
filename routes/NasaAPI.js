const axios = require("axios");
const router = require("express").Router();
const baseURL = "https://api.nasa.gov/";
const apikey = "api_key=OsxKBADdC2NEduQmMsJU9kxQTfLlc2vQYdtC4XFE";
const marsRoverApiQuery = "mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&"
const jobsUrl = "https://api.linkedin.com/v1/job-search?";
const imageURL = "https://images-api.nasa.gov/search?media_type=image&q=";
const APODapiquery = "planetary/apod?";
const asteroidApiQuery = "neo/rest/v1/feed?start_date=";
const moment = require("moment")
const currentday = moment().format("YYYY-MM-DD");

router.get("/nasa/apod", async (req,res)=>{
   const apod = await axios.get(baseURL + APODapiquery + apikey);
   res.json(apod)
})

router.get("/nasa/rover", async (req,res)=>{
    const rover = await axios.get(baseURL + marsRoverApiQuery + apikey);
    res.json(rover)
});

router.get("/nasa/jobs", async (req,res)=>{
    const jobs = await axios.get(jobsUrl)
})

router.get("/nasa/image", async (req,res)=>{
    const images = await axios.get(imageURL+req.query.q);
    res.json(images)
});

router.get("/nasa/asteroid", async (req,res)=>{
    const asteroid = await axios.get(baseURL + asteroidApiQuery + currentday + apikey);
    res.json(asteroid)
})

module.exports = router;


//axios.get(`/api/nasa/image?q=${insert dynamic search term here}`)