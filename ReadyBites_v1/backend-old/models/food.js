var mongoose = require('mongoose');

//img
var FoodSchema = new mongoose.Schema({
    type: String,
    distance: Number, //time to go
    waitingTime: Number,
    healthyIndex: Number,
    taste: Number,
    price: Number
});

module.exports = mongoose.model('Food', FoodSchema);