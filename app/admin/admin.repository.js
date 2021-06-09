'use strict'
const Repository = require("../../util/repository");

const security = require("../../config/security");
const response = require("../../util/response");

class AdminRepository extends Repository{
    table = "admin_store";
    expiresIn = 24*24*60;

    register(admin, result){
        this.con.query(`${this.sentence.find(this.table)} WHERE mail = "${admin.mail}"`, (err,res) => { 
            if(res == null){
                this.con.query(this.sentence.insertRow(this.table),admin,(err,res) =>{
                    if(err) return response.authError(res,true,false);
                    else if(!res) return response.authError(res,false,false);
                    else {
                        let token = security.register({id: admin.id, store: admin.store});
                        console.info("[register] => success");
                        return response.ok(res,'ok',adminResponse(token,expiresIn));
                    }
                });
            }else{
                return response.error(result,409,response.MAIL_EXIST,null);
            }
        });
    }

    
    login(admin, result){
        this.con.query(`${this.sentence.find(this.table)} WHERE mail = "${admin.mail}"`, (err,res) => { 
            if(res != null){
                if(err) return response.authError(result,true,true);
                else{
                    if(security.passwordVerify(admin.password, res[0].password)){
                        let token = security.register({id: res[0].id, store: res[0].store})
                        return response.ok(result,'ok',this.adminResponse(token,this.expiresIn));
                    }else{
                        return response.authError(result,false,true);
                    }
                } 
            }else{
                return response.error(result,409,response.MAIL_NOT_EXIST,null);
            }
        });
    }

    adminResponse(token,time){
        return {
            key: token,
            time: time
        }
    }

}

module.exports = AdminRepository;