var configValues = require('../config/config.json');

/**
 * This object requires config.json and gets the object with this method on it and returns the connection string to db.
 * We'll use that to connect to MongoDB use mongoose.
 */

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.name + ':' + configValues.pwd + '@ds153815.mlab.com:53815/nodeangular2';
    }
};