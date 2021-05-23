"use strict";

const Categoria = require("./category.schema");
const resp = require("../../util/response");

const controllerCategory = {
  save: function (req, res) {
    let categoria = new Categoria();
    let params = req.body;

    categoria.descripcion = params.descripcion;
    categoria.nombre = params.nombre;

    categoria.save((err, categoria) => {
      return resp.start(res, err, categoria, [
        "Error al guardar la categoria",
        "No se ha podido guardar la categoria",
        "ok",
      ]);
    });
  },

  get: function (req, res) {
    var categoryId = req.params.id;

    if (categoryId == null) return resp.undefined(res, "El categoria no existe");

    Categoria.findById(categoryId, (err, categoria) => {
      return resp.start(res, err, categoria, [
        "Error al traer los datos de la categoria",
        "La categoria no existe",
        "ok",
      ]);
    });
  },

  getList: function (req, res) {
    Categoria.find({store:req.userData.store}).exec((err, categorias) => {
      return resp.start(res, err, categorias, [
        "Error al traer los datos de la categoria",
        "No hay categorias disponibles",
        "ok",
      ]);
    });
  },

  update: function (req, res) {
    let id = req.params.id;
    let body = req.body;
    this.updateCategory(id,body,false,res);
  },

  updateCategory: function(id,body,file,res){
    Categoria.findByIdAndUpdate(
      id,
      body,(err, categoria) => {
        return resp.start(res, err, categoria, [
          file ? "Error al actualizar la imagen de la categoria" : "Error al actualizar la categoria",
          "No existe la categoria",
          "ok",
        ]);
      }
    );
  },

  delete: function (req, res) {
    let id = req.params.id;

    categoria.findByIdAndRemove(id, (err, categoria) => {
      return resp.start(res, err, categoria, [
        "Error al eliminar la categoria",
        "No existe la categoria",
        "ok",
      ]);
    });
  },
};

module.exports = controllerCategory;
