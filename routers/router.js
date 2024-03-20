const router = require("express").Router();
const universityService = require("../services/universities.service");

router.get("/search", universityService);

module.exports = router;
