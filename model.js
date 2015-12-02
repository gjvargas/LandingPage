var mongoose = require('mongoose');

var subscriberSchema = new mongoose.Schema({
    email : {
        type : String,
        required : 'Please enter your email address',
        index: {unique: true, dropDups: true}
    },
    cost : {
        type : String,
        default : "Something went wrong with the cost"
    }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
