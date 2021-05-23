'use strict'

const express = require("express");
const brandController = require("./brands.controller");
const fileController = require("../file/file.controller");
const security = require('../../config/security');

const routerBrand = express.Router();

//Middleware es algo que se ejecuta antes del controlador

const multipart = require("connect-multiparty");
const brandMiddleware = multipart({ uploadDir: "./assets/brands" });

// Router brand
routerBrand.post("/save", security.verify,brandController.save);
routerBrand.get("/list", brandController.getList);
routerBrand.put("/update/:id?", security.verify, brandController.update);
routerBrand.delete("/delete/:id?", security.verify, brandController.delete);
routerBrand.post(
  "/save/image/:id",
  brandMiddleware,
  fileController.uploadImage
);
routerBrand.get("/image/:ext/:file", fileController.getImage);

module.exports = routerBrand;