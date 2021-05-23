'use strict'

var mongo = require("mongoose")


var schemaProduct = mongo.Schema({
    description: {
        type: String,
        trim: true,
        required: 'la descripción es requerida'
    },
    code:{
        type: String,
        trim: true,
    },
    name:{
        type: String,
        trim: true,
        required: 'el nombre es requerido'
    },
    price:{
        type: Number,
        trim: true,
        required: 'el precio es requerido'
    },
    rating:{
        type: Number,
        trim: true,
    },
    quantity:{
        type: Number,
        trim: true,
    },
    inventoryStatus:{
        type: String,
        trim: true,
    },
    category: {
        type: Object,
        trim: true,
        required: 'la categoria es requerida'
    },
    imagen: {
        type: String,
        trim: true
    },
    ext: {
        type: String,
        trim: true
    },
    store: {
        type: Number,
        trim: true,
        required: 'la tienda es requerida'
    }
})

module.exports = mongo.model('productos',schemaProduct)
