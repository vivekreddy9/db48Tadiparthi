var Soda = require('../models/Soda');
// List of all Sodas
exports.Soda_list = function(req, res) {
res.send('NOT IMPLEMENTED: Soda list');
};
// for a specific Soda.
exports.Soda_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Soda detail: ' + req.params.id);
};
// Handle Soda create on POST.
exports.Soda_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Soda create POST');
};
// Handle Soda delete form on DELETE.
exports.Soda_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Soda delete DELETE ' + req.params.id);
};
// Handle Soda update form on PUT.
exports.Soda_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Soda update PUT' + req.params.id);
}