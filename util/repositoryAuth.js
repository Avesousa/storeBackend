'use strict'
const Repository = require("./repository");

class RepositoryAuth extends Repository{
    table = "";
    expiresIn = 24*24*60;
    user = {mail: "", doc:"",store:""};
    message = "";
    validation = true;
    userSecurity= {};
    result = null;

    register(user, result){
        this.user = user;
        let sql = this.sentence.find(this.table) + this.getCondition();
        if(this.validation){
            this.con.query(sql, user, (err,res) => { 
                if(res || res.length == 0){
                    this.con.query(this.sentence.insertRow(this.table),user,(err,res) =>{
                        user.id = res.insertId;
                        if(err) return this.response.authError(result,true,false);
                        else if(!res) return this.response.authError(result,false,false);
                        else {
                            this.addUserSecurity(user,() => {
                                console.info("[Register] => success");
                                let token = this.security.register(this.userSecurity);
                                return this.response.ok(result,'ok',this.getResponse(token));
                            });
                        }
                    });
                }else{
                    return this.response.error(result,409,this.user.doc ? this.response.MAIL_OR_DOC_EXIST : this.response.MAIL_EXIST,null);
                }
            });
        }else{
            return this.response.error(result,409,this.message,null);
        }
    }

    
    login(user, result){
        if(user.mail && user.password){
            this.con.query(`${this.sentence.find(this.table)} WHERE mail = "${user.mail}"`, (err,res) => {
                if(res){
                    if(err) 
                        return this.response.authError(result,true,true);
                    else{
                        if(res.length > 0){
                            if(this.security.passwordVerify(user.password, res[0].password)){
                                this.addUserSecurity(res[0], () => {
                                    console.info("[Register] => success");
                                    let token = this.security.register(this.userSecurity);
                                    return this.response.ok(result,'ok',this.getResponse(token));
                                });
                                
                            }else{
                                return this.response.authError(result,false,true);
                            }
                        }else{
                            return this.response.authError(result,false,true);
                        }
                    } 
                }else{
                    return this.response.error(result,409,this.response.MAIL_NOT_EXIST,null);
                }
            });
        }else{
            return this.response.error(result,409,this.response.MAIL_OR_PASS_NOT_EXIST,null);
        }
    }

    update(object,result){
        if(object.id){
            this.con.query(`${this.sentence.update(this.table)}${object.id}`, object, (err,res) => {
                if(err){
                    return this.response.error(result, 400, `Error [UPDATE] => ${this.response.UPDATE_ERROR}`, err)
                }else{
                    let sql = this.sentence.findById(this.table);
                    this.con.query(sql, object.id, (err,resTwo) => {
                        this.addUserSecurity(resTwo[0],() => {
                            console.info("[Register] => success");
                            let token = this.security.register(this.userSecurity);
                            return this.response.ok(result,'ok',this.getResponse(token));
                        });
                    })
                }
            });
        }else{
            return this.response.error(result, 409, "Hace falta el id para actualizar", null);
        }
    }

    addUserSecurity(user, callback){
        return null;
    }

    getResponse(token){
        return {
            ...this.userSecurity,
            key: token,
            time: this.expiresIn,
            login: true
        }
    }

    getCondition(){
        return null;
    }

}

module.exports = RepositoryAuth;