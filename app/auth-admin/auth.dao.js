const mongo = require('mongoose');
const Admin = require('../admin/admin.model');

module.exports = mongo.model('admin',Admin);