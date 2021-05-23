'use strict'

const mongo = require('mongoose');
const Schema = mongo.Schema;
var Admin = new Schema({
    name: {
        type: String,
        trim: true,

    },
    mail: {
        type: String,
        required: 'El correo electrónico es requerido',
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: 'La contraseña debes ingresarla',
        trim: true,

    },
    store: {
        type: String,
        trim: true,
        required: 'La tienda destinada es requerida'
    }
},{
    timestamps: true
});

module.exports = Admin;