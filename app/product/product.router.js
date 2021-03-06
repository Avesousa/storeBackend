"use strict";

const express = require("express");
const productoController = require("./product.controller");
const fileController = require("../file/file.controller");
const security = require('../../config/security');

const routerProduct = express.Router();

//Middleware es algo que se ejecuta antes del controlador

const multipart = require("connect-multiparty");
const productoMiddleware = multipart({ uploadDir: "./assets/productos" });

// Router producto
//routerProduct.post("/save", security.verify,productoController.save);
routerProduct.post("/save" ,productoController.save);
routerProduct.get("/",productoController.getList);
routerProduct.get("/:id?", productoController.get);
routerProduct.get("/list/stand/:max?", productoController.getListStand)
routerProduct.get("/list/:max",productoController.getListLimit);
routerProduct.get("/list/category/:category", productoController.getByCategory);
routerProduct.put("/:id?", productoController.update);
routerProduct.delete("/delete/:id?", security.verify, productoController.delete);
routerProduct.post(
  "/save/image/:id",
  productoMiddleware,
  fileController.uploadImage
);
routerProduct.get("/image/:ext/:file", fileController.getImage);

module.exports = routerProduct;