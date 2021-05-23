const Admin = require('./auth.dao');
const security = require('../../config/security');
const resp = require("../../util/response");
const expiresIn = 24*24*60;

function adminResponse(token,time){
    return {
        key: token,
        time: time
    }
}

const controllerAuth = {
    register: function(req,res){
        let adminNew = {
            name: req.body.name,
            mail: req.body.mail,
            password: security.passwordConvert(req.body.password),
            store: req.body.store
        }
        Admin.findOne({mail:adminNew.mail}, (err,admin) => {
            console.info("[register] => start");
            if(err) return resp.error(res,500,resp.SERVER_ERROR);
            else if(!admin){
                Admin.create(adminNew, (err,admin) =>{
                    if(err) return resp.authError(res,true,false);
                    else if(!admin) return resp.authError(res,false,false);
                    else {
                        let token = security.register({id: admin.id, store: admin.store});
                        console.info("[register] => success");
                        return resp.ok(res,'ok',adminResponse(token,expiresIn));
                    }
                })        
            }else{
                return resp.error(res,409,resp.MAIL_EXIST);
            }
        })
        
    },

    login: function(req,res){
        let adminData = {
            mail: req.body.mail,
            password: req.body.password
        }
        Admin.findOne({mail: adminData.mail}, (err,admin) =>{
            if(err) return resp.authError(res,true,true);
            else if(!admin) return resp.authError(res,false,true);
            else{
                if(security.passwordVerify(adminData.password, admin.password)){
                    let token = security.register({id: admin.id, store: admin.store})
                    return resp.ok(res,'ok',adminResponse(token,expiresIn));
                }else{
                    return resp.authError(res,false,true);
                }
            } 
        })
    },

    verify: function(req,res){
        return security.verifyToken(req,res);
    }

    
}

module.exports = controllerAuth;