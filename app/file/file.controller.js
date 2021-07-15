const fs = require("fs");
const path = require("path");
const producto = require("../product/product.controller");
const brand = require("../brands/brands.controller");
const resp = require("../../util/response");

function definirTipo(id, data, type, response) {
    console.log("FILE::CONTROLLER::DefinirTipo => ", id, type, data);
    switch (type) {
        case 'productos':
            return producto.updateProduct(id, data, true, response);
        case 'brands':
            return brand.updateBrand(id,data,true,response);
        default:
            return producto.updateProduct(id, data, true, response);
    }
}

const controllerFile = {
    uploadImage: function (req, res) {
        let id = req.params.id;
        let 
        type = req.baseUrl.slice(5);
        console.log(`Save image in ${type}`);
        if (req.files) {
            let path = req.files.image.path;
            let nameWithExt = (path.split("\\")[2]).split(".");
            let name = nameWithExt[0];
            let ext = nameWithExt[1];

            if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "gif" || ext == "svg") {
                try {
                    return definirTipo(id, { imagen: name, ext: ext }, type, res);
                } catch (error) {
                    return resp.error(res, 506, "Error al intentar definir tipo de imagen");
                }
            } else {
                fs.unlink(path, (err) => {
                    return resp.error(res, 505, "Formato no válido");
                });
            }
        } else {
            return resp.error(res, 505, "No tiene imagen que subir");
        }
    },

    getImage: function (req, res) {
        let file = req.params.file + '.' + req.params.ext;
        let pathFile = "./assets/"+ 
        req.baseUrl.slice(5) + "/" +
        (req.params.sub ? req.params.sub + "/" : '') +
        file;
        
        fs.exists(pathFile, (exist) => {
            if (exist) {
                return res.sendFile(path.resolve(pathFile));
            } else {
                return resp.ok(res, "No existe la imagen seleccionada", "-");
            }
        });
    }
}

module.exports = controllerFile;