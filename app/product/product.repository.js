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

    findStand(store, max, result){
        let query = `${this.sentence.find(this.table)} 
            WHERE store = ${store} 
            AND rating = 5
            AND sale = 1
            ORDER BY RAND() LIMIT ${max}`
        this.con.query(query, (err, res) => {
            return err ? this.response.error(res, 400, `Error [FIND LIMIT MAX] => ${this.response.FIND_ERROR}`, err) :
            this.response.ok(result, "ok", res);
        });
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
    
    findById(id, result){
        this.con.query(this.sentence.findById(this.table), id, (err,res) => {
            return err ? this.response.error(result, 400, `Error [FIND] => ${this.response.FIND_ERROR}`, err) :
            ((res.length) ? this.response.okData(result, res) :
            this.response.error(result, 409, `No se encontró resultado con id ${id}`, null));
        });
    }

    update(product, isFile, result){
        this.con.query(`${this.sentence.update(this.table)}${product.id}`, product, (err,res) => {
            return err ? 
            this.response.error(result, 400, isFile ? `Error [ARCHIVO DE IMAGENES] => ${this.response.DELETE_ERROR}` : `Error [PRODUCTO] => ${this.response.UPDATE_ERROR}`, err) :
            this.response.ok(result, "OK" , {
                ...product,
                ...res});
        });
    }
}

module.exports = ProductRepository;