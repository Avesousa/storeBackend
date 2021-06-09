'use strict';

const Brands = require("./brands.model.js");
const resp = require("../../util/response");

const controllerBrands = {

    save: function (req, res) {
        console.log(req);
        let params = req.body;
        let brand = {
            description : params.description,
            store : params.store
        }
        Brands.save(new Brands(brand),res);
    },

    getList: function (req, res) {
        console.log(req.headers.store);
        Brands.getList(req.headers.store,res);
    },

    update: function (req, res) {
        let id = req.params.id;
        let body = req.body;
        controllerBrands.updateBrand(id, body, false, res);
    },

    updateBrand: function (id, body, file, res) {
        body.id = id;
        Brands.update(body,file,res);
        console.log("update brand");
    },

    delete: function (req, res) {
        let id = req.params.id;
        Brands.delete(id,res);
    }
}

module.exports = controllerBrands;