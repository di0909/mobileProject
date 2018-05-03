var mongoose = require('mongoose');

//img
var FoodSchema = new mongoose.Schema({
    type: String,
    waitingTime: Number,
    calories: Number,
    taste: Number,
    price: Number,
    image: String,
    //location: {
        // It's important to define type within type field, because
        // mongoose use "type" to identify field's object type.
        //type: {type: String, default: 'Point'},
        coordinates: {type: [Number], default: [0, 0]},
        address: String
    //}
    /*location: {
        coordinates:{
            type: { type: [Number]}, 
            index: '2dsphere'
        }
    }*/
});


module.exports = mongoose.model('Food', FoodSchema);