var express = require('express');
var router = express.Router();

var ctrlmain = require('C:/Users/Vinnusss/OneDrive/Desktop/loc8r/app_server/controller/main');

/* GET home page. */
router.get('/',ctrlmain.index);
module.exports=router;
module.exports = router;