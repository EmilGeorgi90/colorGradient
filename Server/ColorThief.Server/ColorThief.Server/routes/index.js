'use strict';

const express = require('express');
const router = express.Router();
const ColorThief = require('color-thief');
const cloudinary = require('cloudinary');


/* GET home page. */
cloudinary.config({ 
    cloud_name: 'ddsuaqv5j', 
    api_key: '883598229586869', 
    api_secret: 'frpjAq-DTL9PLUoJDHoMtcLE2oM' 
  });
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});
router.get('/image', function (req, res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        cloudinary.api.resource('y0zvhxnxfesbqi2rfarg',  
                        function(result)  { 
                            res.jsonp({color1: result.colors[0][0], color2: result.colors[1][0], color3: result.colors[2][0]}) 
                        }, { colors: true });
    })
module.exports = router
