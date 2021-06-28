'use strict'
const Repository = require("../../util/repository");
const dao = new Repository();
dao.table = "zone";

const Zone = function(zone){
    this.id = zone.id;
    this.description = zone.description;
    this.price = zone.price;
    this.store = zone.store;
}

Zone.save = (zone, result) =>  dao.save(zone, result);
Zone.getAll = (store, result) => dao.findByStore(store, result);
Zone.update = (zone, isFile, result) =>  dao.update(zone, isFile, result);
Zone.delete = (id, result) => dao.deleteById(id, result);

module.exports = Zone;