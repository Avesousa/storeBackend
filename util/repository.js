'use strict'

const connection = require("../config/connection");
const sentences = require("./sentence");
const responses = require("./response"); 
const securitys = require("../config/security");

class Repository{
    
    con = connection;
    sentence = sentences;
    response = responses;
    security = securitys;
    messageOk = "Ok";
    table = "";
    
    save(object, result){
        this.con.query(this.sentence.insertRow(this.table), object, (err,res) =>{
            return err ? this.response.error(result, 400, `Error [SAVE] => ${this.response.SAVE_ERROR}`, err) :
            this.response.ok(result, this.messageOk ,{ ...object });
        });
    }

    find(result){
        this.con.query(this.sentence.find(this.table), (err,res) => {
            return err ? this.response.error(result, 400, `Error [FIND] => ${this.response.FIND_ERROR}`, err) :
            this.response.ok(result, "OK" , res);
        });
    }

    findById(id, result){
        this.con.query(this.sentence.findById(this.table), id, (err,res) => {
            return err ? this.response.error(result, 400, `Error [FIND] => ${this.response.FIND_ERROR}`, err) :
            ((res.length) ? this.response.ok(result, "OK" , res) :
            this.response.error(result, 409, `No se encontró resultado con id ${id}`, null));
        });
    }

    findByStore(store,result){
        this.con.query(this.sentence.findByStore(this.table), store, (err,res) => {
            return err ? this.response.error(result, 400, `Error [FIND] => ${this.response.FIND_ERROR}`, err) :
            ((res.length) ? this.response.ok(result, "OK" , res) :
            this.response.error(result, 409, `No se encontró resultado`, null));
        });
    }

    deleteById(id, result){
        this.con.query(this.sentence.deleteById(this.table), id, (err,res) => {
            return err ? this.response.error(result, 400, `Error [DELETE] => ${this.response.DELETE_ERROR}`, err) :
            this.response.ok(result, "OK" , res);
        });
    }

    update(object, result){
        if(object.id != null && object.id != undefined){
            this.con.query(this.sentence.update(this.table), object, (err,res) => {
                return err ? this.response.error(res, 400, `Error [UPDATE] => ${this.response.UPDATE_ERROR}`, err) :
                this.response.ok(result, "OK" , res);
            });
        }else{
            return this.response.error(result, 409, "Hace falta el id para actualizar", null);
        }
    }

}

module.exports = Repository;