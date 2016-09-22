var User = require('../models/user');
/**
 *  Create a reusable model. I'll be able to create, find, delete, update messages using the Message object being exported..
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = new Schema({
    content: {type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User'}
});

messageSchema.post('remove', function(doc) {
    var deletedMessage = doc;
    User.findById(doc.user, function(err, doc) {
        doc.messages.pull(deletedMessage);
        doc.save();
    });
});

// schema is the blueprint and the model is what we will work with throughout our code.
module.exports = mongoose.model('Message', messageSchema);