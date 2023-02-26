let mongoose= require('mongoose');
let businessContactsModel = mongoose.Schema({
    name: String,
    number: String,
    email: String,
},
    {
    collection: "businessContact"
    });

module.exports = mongoose.model('businessContact', businessContactsModel);