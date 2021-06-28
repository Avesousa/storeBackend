"use strict";

const Zone = require("./zone.model");

const controllerZone = {
  save: function (req, res) {
    let params = req.body;
    let zone = {
      description : params.description,
      price : params.price,
      store: params.store
    }

    Zone.save(new Zone(zone),res);
  },

  getList: function (req, res) {
    Zone.getAll(req.headers.store,res);
  },

  update: function (req, res) {
    let id = req.params.id;
    let body = req.body;
    controllerZone.updateZone(id, body, false, res);
  },

  updateZone: function (id, body, file, res) {
    body.id = id;
    Zone.update(body, file, res);
  },

  delete: function (req, res) {
    let id = req.params.id;
    Zone.delete(id,res);
  },
};

module.exports = controllerZone;
