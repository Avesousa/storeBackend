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

    if(params.sale){
      productNew = {
        ...productNew, 
        sale : params.sale, 
        priceSale: params.priceSale
      }
    }

    Producto.save(new Producto(productNew),res);
  },

  get: function (req, res) {
    var productoId = req.params.id;
    if (productoId == null) return resp.error(res, 409, "El producto no existe");
    Producto.getById(productoId, res);
  },

  getList: function (req, res) {
    Producto.getAll(req.headers.store,res);
  },

  getListStand: function (req, res){
    let max = parseInt(req.params.max);
    Producto.getListStand(req.headers.store,max,res);
  },

  getByCategory: function(req,res){
    Producto.getByCategory(req.headers.store, parseInt(req.params.category),res);
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
    
    Producto.update({
      id,
      ...body
    }, file, res);
  },

  delete: function (req, res) {
    let id = req.params.id;
    Product.delete(id,res);
  },
};

module.exports = controllerProduct;
