var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Soda_controller = require('../controllers/Soda');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Soda ROUTES ///
// POST request for creating a Soda.
router.post('/resource/Sodas', Soda_controller.Soda_create_post);
// DELETE request to delete Soda.
router.delete('/resource/Sodas/:id', Soda_controller.Soda_delete);
// PUT request to update Soda.
router.put('/resource/Sodas/:id', Soda_controller.Soda_update_put);
// GET request for one Soda.
router.get('/resource/Sodas/:id', Soda_controller.Soda_detail);
// GET request for list of all Soda items.
router.get('/resource/Sodas', Soda_controller.Soda_list);
module.exports = router;