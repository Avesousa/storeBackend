'use strict'
const RepositoryAuth = require("../../util/repositoryAuth");

class AdminRepository extends RepositoryAuth{
    table = "admin_store";

    getCondition(){
        if(this.user.mail){
            if(this.user.store){
                return ` WHERE mail = '${this.user.mail}'`;
            }else{
                this.message = this.response.STORE_NOT_EXIST;
                this.validation = false;
            }
        }else{
            this.message = this.response.MAIL_NOT_EXIST;
            this.validation = false;
        }
    }

    addUserSecurity(user, callback){
        this.userSecurity = {
            name: user.name ? user.name : '',
            mail: user.mail ? user.mail : '',
            store: user.store ? user.store : 0
        }
    }
    
}

module.exports = AdminRepository;