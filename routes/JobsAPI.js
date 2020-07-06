const axios = require("axios");
const router = require("express").Router();

const jobsUrl = "https://api.linkedin.com/v1/job-search?";

router.get("/jobs", async (req,res)=>{
    const {data} = await axios.get(jobsUrl + req.query.query);
    res.json(data)
 })

 module.exports = router;
