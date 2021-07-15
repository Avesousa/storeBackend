"use strict";

var express = require("express");
var cors = require("cors");

var app = express();

//files routes
const routerProduct = require("./app/product/product.router");
const routerAuth = require('./app/auth/auth.router');
const routerCategory = require("./app/category/category.router");
const routerBrand = require("./app/brands/brands.router");
const routerZone = require("./app/zone/zone.router");
const routerSubscription = require("./app/subscription/subscription.router");
const routerOrder = require("./app/order/order.router");

/*
*/
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

app.use(cors());
// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/productos", routerProduct);
app.use("/api/auth",routerAuth);
app.use("/api/categorias", routerCategory);
app.use("/api/brands", routerBrand);
app.use("/api/zone", routerZone);
app.use("/api/subscription", routerSubscription);
app.use("/api/order", routerOrder);

/*
*/
// export

module.exports = app;
