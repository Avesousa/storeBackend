const mongo = require('mongoose');
const Schema = mongo.Schema;

const Category = new Schema({
    descripcion:{
        type: String,
        required: true,
        trim: true
    },
    nombre:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    icon:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    extIcon:{
        type: String,
        required: true,
        trim: true
    },
    imagen:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    extImagen:{
        type: String,
        required: true,
        trim: true
    },
    store:{
        type: String,
        required: true,
        trim: true
    },
},{
    timestamps: true
});
