//mongoose schema defined.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DataSchema = new Schema({
 
    category: {type: String, required: true, max: 100},
    name:{type: String, required: true},
    mtl:{type: String, required: true},
    obj:{type: String, required: true},
    thumb:{type: String, required: true}

});

//exporting model
module.exports = mongoose.model('list item', DataSchema);