'use strict'
const Repository = require("../../util/repository");

class CategoryRepository extends Repository{
    table = "category";

    update(category, categoryId, isFile, result){
        category.id = categoryId;
        con.query(sentence.update(this.table), category, (err,res) => {
            return err ? 
            this.response.error(res, 400, isFile ? `Error [ARCHIVO DE IMAGENES] => ${this.response.DELETE_ERROR}` : `Error [CATEGORIA] => ${this.response.UPDATE_ERROR}`, err) :
            this.response.ok(result, "OK" , res);
        });
    }

    findByStore(store,result){
        let query = this.sentence.findByStore(this.table) + " ORDER BY description ASC";
        this.con.query(query, store, (err,res) => {
            return err ? this.response.error(result, 400, `Error [FIND] => ${this.response.FIND_ERROR}`, err) :
            ((res.length) ? this.response.ok(result, "OK" , res) :
            this.response.error(result, 409, `No se encontró resultado`, null));
        });
    }
}

module.exports = CategoryRepository;