'use strict'

const mongo = require("mongoose");
const schemaCategory = require("./category.model");

// var schemaCategory = mongo.Schema({
//     descripcion: String,
//     nombre: String,
//     icon: String,
//     extIcon: String,
//     imagen: String,
//     extImagen: String,
//     store: String
// })

module.exports = mongo.model('categoria',schemaCategory);