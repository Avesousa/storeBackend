"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//files routes
const routerProduct = require("./app/product/product.router");
const routerCategory = require("./app/category/category.router");
const routerBrand = require("./app/brands/brands.router");
const routerAuth = require('./app/auth-admin/auth.router');
const routerSubscription = require("./app/subscription/subscription.router");

// Configurar cabeceras y cors
app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, store"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes req(Request) = peticiones recibidas / res(Response) = datos enviados
app.use("/api/productos", routerProduct);
app.use("/api/categorias", routerCategory);
app.use("/api/subscription", routerSubscription);
app.use("/api/brands", routerBrand);
app.use("/api/auth",routerAuth);

// export

module.exports = app;
