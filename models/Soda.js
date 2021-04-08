const mongoose = require("mongoose")
const SodaSchema = mongoose.Schema({
company: String,
flavour: String,
price: Number
})
module.exports = mongoose.model("Soda", SodaSchema)