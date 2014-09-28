var express = require('express');
var router = express.Router();

var homePageRouter = require('../controllers/homePageCtrl.js');


router.use('/',homePageRouter);

module.exports = router;