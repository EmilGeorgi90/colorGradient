"use strict";

const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");
postcss([require('postcss-easing-gradients')])

/* GET home page. */
cloudinary.config({
  cloud_name: "ddsuaqv5j",
  api_key: "883598229586869",
  api_secret: "frpjAq-DTL9PLUoJDHoMtcLE2oM"
});
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});
router.get("/image", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
    cloudinary.v2.uploader.upload(
        "500_1550310935381_1550310935381.png", { width: 10, height: 300, crop: "fill", gravity: "south_west"}, 
    function(error, result) {
      console.log(result, error);

  cloudinary.api.resource(
    result.public_id,
    function(result) {
      res.jsonp({
        color1: result.colors[0][0],
      });
    },
    { colors: true }
  );
  cloudinary.v2.uploader.destroy(result.public_id);
}
);
});
module.exports = router;
