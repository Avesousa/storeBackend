'use strict'
const CategoryRepository = require("./category.repository");
const dao = new CategoryRepository();

const Category = function(category){
    this.id = category.id;
    this.description = category.description;
    this.name = category.name;
    this.icon = category.imagen;
    this.exticon = category.ext;
    this.imagen = category.imagen;
    this.extimagen = category.ext;
    this.store = category.store;
}

Category.save = (category, result) =>  dao.save(category, result);
Category.getById = (id, result) =>  dao.findById(id, result);
Category.getAll = (store, result) => dao.findByStore(store, result);
Category.update = (category, isFile, result) =>  dao.update(category, isFile, result);
Category.delete = (id, result) => dao.deleteById(id, result);

module.exports = Category;