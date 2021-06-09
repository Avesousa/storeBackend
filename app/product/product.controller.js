"use strict";

const Producto = require("./product.model");
const resp = require("../../util/response");

const controllerProduct = {
  save: function (req, res) {
    let params = req.body;
    let productNew = {
      description : params.description,
      price : params.price,
      category : params.category,
      store: params.store
    }

    Producto.save(new Producto(productNew),res);
  },

  get: function (req, res) {
    var productoId = req.params.id;
    if (productoId == null) return resp.undefined(res, "El producto no existe");
    Producto.getById(productoId, res);
  },

  getList: function (req, res) {
    Producto.getAll(req.headers.store,res);
  },

  getListLimit: function (req, res) {
    let max = parseInt(req.params.max);
    Producto.getWhitMax(req.headers.store, max, res);
  },

  update: function (req, res) {
    let id = req.params.id;
    let body = req.body;
    controllerProduct.updateProduct(id, body, false, res);
  },

  updateProduct: function (id, body, file, res) {
    body.id = id;
    Producto.update(body, file, res);
    console.log("update product");
  },

  delete: function (req, res) {
    let id = req.params.id;
    Product.delete(id,res);
  },
};

module.exports = controllerProduct;
