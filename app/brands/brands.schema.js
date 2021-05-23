'use strict'

const mongo = require('mongoose');
const schemaBrands = mongo.Schema({
    description: {
        type: String,
        trim: true,
        required: 'la descripción es requerida'
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

module.exports = mongo.model('marcas',schemaBrands);