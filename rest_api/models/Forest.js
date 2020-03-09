const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ForestSchema = Schema({
    name: String
})


module.exports = mongoose.model('Forests', ForestSchema);














