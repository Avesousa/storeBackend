const Admin = require('../admin/admin.model');
const User = require('../user/user.model');
const security = require('../../config/security');
const Response = require('../../util/response');

function getUserLogin(req){
    return {
        mail: req.body.mail,
        password: req.body.password
    };
}

const controllerAuth = {

    registerAdmin: function(req,res){
        try {
            let admin = {
                mail: req.body.mail,
                password: security.passwordConvert(req.body.password),
                name: req.body.name,
                store: req.headers.store
            }

            Admin.register(admin,res);

        } catch (error) {
            Response.error(res,500,Response.REGISTER_ERROR,error);
        }

    },

    updateUser: function(req, res){
        try {
            let user = {
                id: req.body.id,
                store: req.headers.store,
                street: req.body.street,
                number: req.body.number,
                zone: req.body.zone.id
            }

            if(req.body.password){
                user = {
                    ...user,
                    password: security.passwordConvert(req.body.password)
                }
            }

            User.update(user,res);
        } catch (error) {
            Response.error(res,400,Response.UPDATE_ERROR,error);
        }
    },

    registerUser: function(req,res){
        try {
            let user = {
                name: req.body.name,
                mail: req.body.mail,
                doc: req.body.doc,
                password: security.passwordConvert(req.body.password),
                store: req.headers.store,
                street: req.body.street,
                number:   req.body.number,
                zone: req.body.zone.id
            }
            User.register(user,res);
        } catch (error) {
            Response.error(res,500,Response.REGISTER_ERROR,error);
        }
    },

    verify: function(req,res){
        return security.verifyToken(req,res);
    },

    loginUser: function(req,res){
        User.login(getUserLogin(req),res);
    },

    loginAdmin: function(req,res){
        Admin.login(getUserLogin(req),res);
    }
}

module.exports = controllerAuth;