"use strict";

const express = require("express");
const categoriaController = require("./category.controller");
const fileController = require("../file/file.controller");
const security = require('../../config/security');

const routerCategory = express.Router();

//Middleware es algo que se ejecuta antes del controlador

const multipart = require("connect-multiparty");
const almacenIcon = multipart({ uploadDir: "./assets/categorias/icon" });
const almacenImage = multipart({ uploadDir: "./assets/categorias" });

// Router categoria
routerCategory.post("/save", security.verify, categoriaController.save);
routerCategory.get("/get/:id?", security.verify, categoriaController.get);
routerCategory.get("/list", security.verify, categoriaController.getList);
routerCategory.put("/update/:id?", security.verify, categoriaController.update);
routerCategory.delete("/delete/:id?", security.verify, categoriaController.delete);

// Router imagen
routerCategory.post(
  "/save/image/:id",
  almacenImage,
  fileController.uploadImage
);
routerCategory.post(
  "/save/icon/:id",
  almacenIcon,
  fileController.uploadImage
);
routerCategory.get("/image/:ext/:sub?/:file",fileController.getImage);

module.exports = routerCategory;
