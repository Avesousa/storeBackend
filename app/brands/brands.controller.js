'use strict';

const Brand = require("./brands.schema.js");
const resp = require("../../util/response");

const controllerBrands = {

    save: function (req, res) {
        let brand = new Brand();
        let params = req.body;

        brand.description = params.description;
        brand.store = req.userData.store;

        brand.save((err, brand) => {
            console.log(err);
            return resp.start(res, err, brand, [
                "Error al guardar la marca asociada",
                "No se ha podido guardar la marca asociada",
                "ok"
            ])
        });
    },

    getList: function (req, res) {
        Brand.find({ store: req.headers.store }).exec((err, brands) => {
            return resp.start(res, err, brands, [
                "Error al traer los datos de las marcas asociadas",
                "No hay marcas asociadas",
                "ok",
            ]);
        });
    },

    update: function (req, res) {
        let id = req.params.id;
        let body = req.body;
        controllerBrands.updateBrand(id, body, false, res);
    },

    updateBrand: function (id, body, file, res) {
        console.log("update brand");
        Brand.findByIdAndUpdate(
            id,
            body, (err, brand) => {
                return resp.start(res, err, brand, [
                    file ? "Error al actualizar el logo de la marca asociada" : "Error al actualizar la marca asociada",
                    "No existe la marca asociada",
                    "ok",
                ]);
            }
        );
    },

    delete: function (req, res) {
        let id = req.params.id;
        Brand.findByIdAndRemove(id, (err, brand) => {
            return resp.start(res, err, brand, [
                "Error a eliminar la marca asociada",
                "No existe la marca asociada",
                "ok",
            ]);
        });
    }
}

module.exports = controllerBrands;