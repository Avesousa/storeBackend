'use strict'
const Repository = require("../../util/repository");

class ProductRepository extends Repository{
    table = "product";

    findWhitMax(store, max, result){
        if(store){
            this.con.query(`${this.sentence.find(this.table)} WHERE store = ${store} ORDER BY RAND() LIMIT ${max}`, (err, res) => {
                return err ? this.response.error(res, 400, `Error [FIND LIMIT MAX] => ${this.response.FIND_ERROR}`, err) :
                this.response.ok(result, "OK" , res);
            });
        }else{
            this.response.error(res, 409, this.response.STORE_NOT_EXIST, null);
        }
    }

    findByCategory(store, category, result){
        if(store){
            this.con.query(`${this.sentence.find(this.table)} WHERE store = ${store} AND category = ${category} ORDER BY description`, (err, res) => {
                return err ? this.response.error(res, 400, `Error [FIND LIMIT MAX] => ${this.response.FIND_ERROR}`, err) :
                this.response.ok(result, "OK" , res);
            });
        }else{
            this.response.error(res, 409, this.response.STORE_NOT_EXIST, null);
        }
    }

    update(product, productId, isFile, result){
        product.id = productId;
        con.query(this.sentence.update(this.table), product, (err,res) => {
            return err ? 
            this.response.error(res, 400, isFile ? `Error [ARCHIVO DE IMAGENES] => ${this.response.DELETE_ERROR}` : `Error [PRODUCTO] => ${this.response.UPDATE_ERROR}`, err) :
            this.response.ok(result, "OK" , res);
        });
    }
}

module.exports = ProductRepository;