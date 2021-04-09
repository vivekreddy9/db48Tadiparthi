var Soda = require('../models/Soda');
// List of all Soda
exports.Soda_list = async function (req, res) {
    try {
        theSoda = await Soda.find();
        res.send(theSoda);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.Soda_view_all_Page = async function (req, res) {
    try {
        theSodas = await Soda.find();
        res.render('Soda', {
            title: 'Soda Search Results',
            results: theSodas
        });
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// for a specific Soda.
exports.Soda_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Soda detail: ' + req.params.id);
};
// Handle Soda create on POST.
exports.Soda_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Soda();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Sodatype":"goat", "cost":12, "size":"large"}
    document.company = req.body.company;
    document.flavour = req.body.flavour;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// Handle Soda delete form on DELETE.
exports.Soda_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Soda delete DELETE ' + req.params.id);
};
// Handle Soda update form on PUT.
exports.Soda_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Soda update PUT' + req.params.id);
}