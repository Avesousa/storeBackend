const Repository = require('../../util/repository');

class SubscriptionRepository extends Repository{
    table = "mail";

    saveSubscription(subscription,result){
        console.log(subscription);
        this.con.query(`${this.sentence.find(this.table)} WHERE mail = '${subscription.mail}'`, (err, res) =>{
            try {
                if(res.length == 0){
                    this.messageOk = "Se ha agregado correctamente la subscripción";
                    this.save(subscription,result);
                }else{
                    this.response.error(result,409,this.response.MAIL_EXIST,err);
                }
            } catch (error) {
                this.response.error(result,500,this.response.SAVE_ERROR,err);
            }
        })
    }
}

module.exports = SubscriptionRepository;