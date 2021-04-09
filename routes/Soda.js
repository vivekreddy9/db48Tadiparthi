var express = require('express');
const Soda_controlers= require('../controllers/Soda');
var router = express.Router();
/* GET Soda */
router.get('/', Soda_controlers.Soda_view_all_Page );
module.exports = router;