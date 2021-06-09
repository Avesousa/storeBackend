'use strict'
const AdminRepository = require("./admin.repository");
const dao = new AdminRepository();

const Admin = function(admin){
    this.id = admin.id;
    this.name = admin.name;
    this.mail = admin.mail;
    this.password = admin.password;
    this.store = admin.store;
}

Admin.login = (admin, result) => dao.login(admin, result);
Admin.create = (admin, result) =>  dao.save(admin,result);
Admin.getById = (id, result) =>  dao.update(id,result);
Admin.getAll = (result) => dao.find(result);
Admin.register = (admin,result) => dao.register(admin,result);
Admin.update = (admin, result) =>  dao.update(admin,result);

module.exports = Admin;