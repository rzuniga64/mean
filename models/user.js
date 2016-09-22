/**
 *  Create a reusable model. I'll be able to create, find, delete, update messages using the User object being exported..
 */
var mongoose = require('mongoose');
var mongooseUniquevalidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {type: String, required: true },
    lastName: {type: String, required: true },
    password: {type: String, required: true },
    email: {type: String, required: true, unique: true },
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

// tell mongoose to extend the schema by additional functionality which is not built-in. The functionality I want to
// add is an extra validator.
userSchema.plugin(mongooseUniquevalidator);

// schema is the blueprint and the model is what we will work with throughout our code.
module.exports = mongoose.model('User', userSchema);