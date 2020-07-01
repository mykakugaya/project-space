const router = require("express").Router();
const NASARoutes = require("./NasaAPI");
const AuthRoutes = require("./UserAPI");

router.use("/nasa", NASARoutes);
router.use(AuthRoutes);


module.exports = router;