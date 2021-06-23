'use strict'
const ProductRepository = require("./product.repository");
const dao = new ProductRepository();

const Product = function(product){
    this.id = product.id;
    this.description = product.description;
    this.code = product.code;
    this.name = product.name;
    this.price = product.price;
    this.rating = product.rating;
    this.quantity = product.quantity;
    this.inventoryStatus = product.inventoryStatus;
    this.category = product.category;
    this.imagen = product.imagen;
    this.ext = product.ext;
    this.store = product.store;
    this.sale = product.sale;
    this.priceSale = product.priceSale;
}

Product.save = (product, result) =>  dao.save(product, result);
Product.getById = (id, result) =>  dao.findById(id, result);
Product.getAll = (store, result) => dao.findByStore(store, result);
Product.getWhitMax = (store, max, result) => dao.findWhitMax(store, max, result);
Product.update = (product, isFile, result) =>  dao.update(product, isFile, result);
Product.delete = (id, result) => dao.deleteById(id, result);
Product.getByCategory = (store,category, result) => dao.findByCategory(store,category,result);

module.exports = Product;