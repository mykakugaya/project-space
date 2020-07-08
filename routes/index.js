const router = require("express").Router();
const NASARoutes = require("./NasaAPI");
const AuthRoutes = require("./UserAPI");
const imageRoutes = require("./ImageAPI");
const postRoutes = require("./PostsAPI");
const responseRoutes = require("./ResponseAPI");
const jobRoutes = require("./JobsAPI");
const path = require("path");

router.use("/nasa", NASARoutes);
router.use(AuthRoutes);
router.use(imageRoutes);
router.use(postRoutes);
router.use(responseRoutes);
router.use(jobRoutes);
router.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;