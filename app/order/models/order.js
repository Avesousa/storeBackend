'use strict'
const OrderRepository = require("../order.repository");
const dao = new OrderRepository();
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

OrderCreationBody.save = (order, result) =>  dao.save(order, result);
OrderCreationBody.getAll = (store, result) => dao.findByStore(store, result);
OrderCreationBody.update = (order, isFile, result) =>  dao.update(order, isFile, result);
OrderCreationBody.delete = (id, result) => dao.deleteById(id, result);

module.exports = OrderCreationBody;