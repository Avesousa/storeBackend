"use strict";

const OrderCreationBody = require("./models/order");

const controllerOrder = {
  save: function (req, res) {
    let params = req.body;
    let order = {
      products : params.products,
      user : params.user,
      store: req.headers.store
    }

    console.log("ControllerOrder::save =>", order);

    OrderCreationBody.save(new OrderCreationBody(order),res);
  },

  getList: function (req, res) {
    Order.getAll(req.headers.store,res);
  },

  update: function (req, res) {
    let id = req.params.id;
    let body = req.body;
    controllerOrder.updateOrder(id, body, false, res);
  },

  updateOrder: function (id, body, file, res) {
    body.id = id;
    Order.update(body, file, res);
  },

  delete: function (req, res) {
    let id = req.params.id;
    Order.delete(id,res);
  },
};

module.exports = controllerOrder;
