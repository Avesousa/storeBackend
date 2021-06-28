'use strict'

const SubscriptionRepository = require("./subscription.repository");
const dao = new SubscriptionRepository();

const Subscription = function (subscription){
    this.id = subscription.id;
    this.mail = subscription.mail;
    this.name = subscription.name;
    this.doc = subscription.doc;
    this.store = subscription.store;  
}

Subscription.save = (subscription, result) => dao.saveSubscription(subscription, result);
Subscription.getAll = (store, result) => dao.findByStore(store, result);

module.exports = Subscription;