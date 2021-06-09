const Admin = require('../admin/admin.model');
const security = require('../../config/security');
const resp = require("../../util/response");
const expiresIn = 24*24*60;


const controllerAuth = {
    register: function(req,res){
        let admin = {
            mail: req.body.mail,
            password: security.passwordConvert(req.body.password),
            name: "Avelino Figueira",
            store: 12
        }

        Admin.register(admin,res);
    },

    verify: function(req,res){
        return security.verifyToken(req,res);
    },

    login: function(req,res){
        let adminData = {
            mail: req.body.mail,
            password: req.body.password
        }
        
        Admin.login(adminData,res);
    }
}

module.exports = controllerAuth;