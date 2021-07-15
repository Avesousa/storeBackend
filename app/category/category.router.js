"use strict";

const express = require("express");
const categoryController = require("./category.controller");
const fileController = require("../file/file.controller");
const security = require('../../config/security');

const routerCategory = express.Router();

//Middleware es algo que se ejecuta antes del controlador

const multipart = require("connect-multiparty");
const categoryMiddleware = multipart({ uploadDir: "./assets/categorys" });

// Router category
//security.verify
routerCategory.post("/save",categoryController.save);
routerCategory.get("/get/:id?", categoryController.get);
routerCategory.get("/list",categoryController.getList);
routerCategory.put("/:id?", categoryController.update);
routerCategory.delete("/delete/:id?", security.verify, categoryController.delete);
routerCategory.post(
  "/save/image/:id",
  categoryMiddleware,
  fileController.uploadImage
);
routerCategory.get("/image/:ext/:file", fileController.getImage);

module.exports = routerCategory;