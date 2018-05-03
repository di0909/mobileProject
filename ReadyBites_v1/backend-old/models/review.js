var mongoose = require('mongoose');
const User = require('../models/users');

var ReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    review_content: {
        type: String,
        required: true
    },
    review_time: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Review', ReviewSchema);

