'use strict'
const Repository = require("../../util/repository");
const dao = new Repository();
dao.table = "brands";

const Brands = function(brand){
    this.id = brand.id;
    this.description = brand.description;
    this.imagen = brand.imagen;
    this.ext = brand.ext;
    this.store = brand.store;
}

Brands.save = (brand, result) => dao.save(brand,result);
Brands.getList = (store, result) => dao.findByStore(store,result);
Brands.update = (brand, isFile, result) => dao.update(brand,isFile,result);
Brands.delete = (id, result) => dao.delete(id,result);

module.exports = Brands;