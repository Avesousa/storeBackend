"use strict";

const express = require("express");
const orderController = require("./order.controller");
const security = require('../../config/security');

const routerOrder = express.Router();

// Router producto
//routerOrder.post("/save", security.verify,productoController.save);
routerOrder.post("/", orderController.save);
//routerOrder.get("/:id",security.verify,orderController.getById);
//routerOrder.get("/user/:user",security.verify,orderController.getByUser);
//routerOrder.put("/update/:id?", security.verify, orderController.update);
//routerOrder.delete("/delete/:id?", security.verify, orderController.delete);

module.exports = routerOrder;