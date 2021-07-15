'use strict'
const Repository = require("../../../util/repository");
const dao = new Repository();
dao.table = "order";

const Order = function(order){
    /*
    this.id = order.id;
    this.description = order.description;
    this.price = order.price;
    this.store = order.store;
    */
}

const OrderCreationBody = function(order){
    this.products = order.products;
    this.user = order.user;
    this.store = order.store;
}

Order.save = (order, result) =>  dao.save(order, result);
Order.getAll = (store, result) => dao.findByStore(store, result);
Order.update = (order, isFile, result) =>  dao.update(order, isFile, result);
Order.delete = (id, result) => dao.deleteById(id, result);

module.exports = [Order, OrderCreationBody];