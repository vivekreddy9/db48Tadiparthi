var express = require('express');
const Soda_controlers= require('../controllers/Soda');
var router = express.Router();
/* GET Soda */
router.get('/', Soda_controlers.Soda_view_all_Page );
/* GET detail Soda page */
router.get('/detail', Soda_controlers.Soda_view_one_Page);
/* GET create Soda page */
router.get('/create', Soda_controlers.Soda_create_Page);
/* GET create update page */
router.get('/update', Soda_controlers.Soda_update_Page);
/* GET create Soda page */
router.get('/delete', Soda_controlers.Soda_delete_Page);
module.exports = router;
