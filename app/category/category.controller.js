"use strict";

const Category = require("./category.model");
const resp = require("../../util/response");

const controllerCategory = {
  save: function (req, res) {
    let params = req.body;
    if(req.headers.store){
      let categoryNew = {
        description : params.description,
        price : params.price,
        category : params.category,
        store: req.headers.store
      }
  
      Category.save(new Category(categoryNew),res);

    }else{
      resp.error(res,409,resp.STORE_NOT_EXIST,null);
    }
  },

  get: function (req, res) {
    var categoryId = req.params.id;
    if (categoryId == null) return resp.undefined(res, "El Category no existe");
    Category.getById(csategoryId, res);
  },

  getList: function (req, res) {
    Category.getAll(req.headers.store,res);
  },

  update: function (req, res) {
    let id = req.params.id;
    let body = req.body;
    controllerProduct.updateCategory(id, body, false, res);
  },

  updateCategory: function (id, body, file, res) {
    body.id = id;
    console.log(body);
    Category.update(body, file, res);
  },

  delete: function (req, res) {
    let id = req.params.id;
    Product.delete(id,res);
  },
};

module.exports = controllerCategory;
