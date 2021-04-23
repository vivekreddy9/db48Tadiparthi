const mongoose = require("mongoose")
const SodaSchema = mongoose.Schema({
company: {
    type:Number,
    min:1,
    max:500
},
flavour: String,
price: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("Soda", SodaSchema)