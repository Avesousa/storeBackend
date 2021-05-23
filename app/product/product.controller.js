"use strict";

const Producto = require("./product.schema");
const resp = require("../../util/response");

const controllerProduct = {
  save: function (req, res) {
    let producto = new Producto();
    let params = req.body;

    console.log(params);
    console.log(req.userData)

    producto.description = params.description;
    producto.price = params.price;
    producto.category = params.category;
    producto.store = req.userData.store;

    producto.save((err, producto) => {
      return resp.start(res, err, producto, [
        "Error al guardar el producto",
        "No se ha podido guardar el producto",
        "ok",
      ]);
    });
  },

  get: function (req, res) {
    var productoId = req.params.id;

    if (productoId == null) return resp.undefined(res, "El producto no existe");

    Producto.findById(productoId, (err, producto) => {
      return resp.start(res, err, producto, [
        "Error al traer los datos del producto",
        "El producto no existe",
        "ok",
      ]);
    });
  },

  getList: function (req, res) {
    Producto.find({ store: req.headers.store }).exec((err, productos) => {
      return resp.start(res, err, productos, [
        "Error al traer los datos del producto",
        "No hay productos disponibles",
        "ok",
      ]);
    });
  },

  getListLimit: function (req, res) {
    let max = parseInt(req.params.max);
    Producto.find({ store: req.headers.store }).limit(max).exec((err, productos) => {
      return resp.start(res, err, productos, [
        "Error al traer los datos del producto",
        "No hay productos disponibles",
        "ok",
      ]);
    });
  },

  update: function (req, res) {
    let id = req.params.id;
    let body = req.body;
    controllerProduct.updateProduct(id, body, false, res);
  },

  updateProduct: function (id, body, file, res) {
    Producto.findByIdAndUpdate(
      id,
      body, (err, producto) => {
        return resp.start(res, err, producto, [
          file ? "Error al actualizar la imagen del producto" : "Error al actualizar el producto",
          "No existe el producto",
          "ok",
        ]);
      }
    );
  },

  delete: function (req, res) {
    let id = req.params.id;

    producto.findByIdAndRemove(id, (err, producto) => {
      return resp.start(res, err, producto, [
        "Error a eliminar el producto",
        "No existe el producto",
        "ok",
      ]);
    });
  },
};

module.exports = controllerProduct;
