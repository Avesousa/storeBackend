"use strict";

const express = require("express");
const zoneController = require("./zone.controller");
const security = require('../../config/security');

const routerZone = express.Router();

// Router producto
//routerZone.post("/save", security.verify,productoController.save);
routerZone.post("/save", security.verify,zoneController.save);
routerZone.get("/list",zoneController.getList);
routerZone.put("/update/:id?", security.verify, zoneController.update);
routerZone.delete("/delete/:id?", security.verify, zoneController.delete);

module.exports = routerZone;