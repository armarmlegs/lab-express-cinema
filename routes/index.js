const express = require("express");
const router = express.Router();


/* GET home page */
//localhost:3000/
router.get("/", (req, res, next) => res.render("index"));




module.exports = router;
