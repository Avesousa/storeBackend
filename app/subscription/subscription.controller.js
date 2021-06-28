'use strict'

const Subscription = require('./subscription.model');

const controllerSubscription = {

    saveEmail: function(req,res){
        let subscription = {
            mail: req.params.email,
            store: req.headers.store
            
        }
        Subscription.save(new Subscription(subscription),res);
    }

}

module.exports = controllerSubscription;