const router = require("express").Router();
const NASARoutes = require("./NasaAPI");
const AuthRoutes = require("./UserAPI");
const imageRoutes = require("./ImageAPI")

router.use("/nasa", NASARoutes);
router.use(AuthRoutes);
router.use(imageRoutes)

module.exports = router;