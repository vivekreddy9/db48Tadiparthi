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
exports.Soda_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Soda.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.Soda_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Soda.findById(req.params.id)
        // Do updates of properties
        if (req.body.company) toUpdate.company = req.body.company;
        if (req.body.flavour) toUpdate.flavour = req.body.flavour;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// Handle Soda delete on DELETE.
exports.Soda_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Soda.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle a show one view with id specified by query
exports.Soda_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Soda.findById(req.query.id)
        res.render('Sodadetail', {
            title: 'Soda Detail',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a show one view with id specified by query
exports.Soda_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Soda.findById(req.query.id)
        res.render('Sodadetail', {
            title: 'Soda Detail',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a Soda.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Soda_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Sodacreate', {
            title: 'Create Soda'
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a Soda.
// query provides the id
exports.Soda_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Soda.findById(req.query.id)
        res.render('Sodaupdate', {
            title: 'Update Soda Details',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle Soda delete on DELETE.
exports.Soda_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Soda.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a delete one view with id from query
exports.Soda_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Soda.findById(req.query.id)
        res.render('Sodadelete', {
            title: 'Soda Delete',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};