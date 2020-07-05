const router = require("express").Router();
const NASARoutes = require("./NasaAPI");
const AuthRoutes = require("./UserAPI");
const imageRoutes = require("./ImageAPI");
const postRoutes = require("./PostsAPI");
const responseRoutes = require("./responseAPI");

router.use("/nasa", NASARoutes);
router.use(AuthRoutes);
router.use(imageRoutes);
router.use(postRoutes);
router.use(responseRoutes);

module.exports = router;