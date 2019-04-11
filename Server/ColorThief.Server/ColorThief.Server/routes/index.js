"use strict";

const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");
var tinycolor = require("tinycolor2");

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
      const color1 = tinycolor(result.colors[0][0]);
      const color2 = tinycolor(result.colors[1][0]);

      color1.setAlpha(1);
      res.jsonp({
        color1: color1.setAlpha(0).toRgbString(),
        color2: color1.setAlpha(0.01457).toRgbString(),
        color3: color1.setAlpha(0.05882).toRgbString(),
        color4: color1.setAlpha(0.12126).toRgbString(),
        color5: color1.setAlpha(0.19309).toRgbString(),
        color6: color1.setAlpha(0.2693).toRgbString(),
        color7: color1.setAlpha(0.34817).toRgbString(),
        color8: color1.setAlpha(0.42866).toRgbString(),
        color9: color1.setAlpha(0.50925).toRgbString(),
        color10: color1.setAlpha(0.58891).toRgbString(),
        color11: color1.setAlpha(0.66692).toRgbString(),
        color12: color1.setAlpha(0.7426).toRgbString(),
        color13: color1.setAlpha(0.81522).toRgbString(),
        color14: color1.setAlpha(0.88294).toRgbString(),
        color15: color1.setAlpha(0.94505).toRgbString(),
        color16: color1.setAlpha(1).toRgbString(),
        mainBGColor: color2.toRgbString()
      });
    },
    { colors: true }
  );
  cloudinary.v2.uploader.destroy(result.public_id);
}
);
});
module.exports = router;
