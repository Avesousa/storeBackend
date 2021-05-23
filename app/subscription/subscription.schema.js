'use strict'

var mongo = require("mongoose");

var schemaSubscription = {
    email: {
        type: String,
        trim: true,
        required: 'el correo electrónico es requerido'
    },
    name: {
        type: String,
        trim: true,
    },
    doc: {
        type: Number,
        trim: true,
    },
    store: {
        type: Number,
        trim: true,
        required: 'la tienda es requerida'
    }
}

module.exports = mongo.model('subscriptions',schemaSubscription);