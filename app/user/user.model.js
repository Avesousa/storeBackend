'use strict'
const UserRepository = require("./user.repository");
const dao = new UserRepository();

const User = function(user){
    this.id = user.id;
    this.name = user.name;
    this.mail = user.mail;
    this.doc = user.doc;
    this.password = user.password;
    this.store = user.store;
    this.street = user.street;
    this.number = user.number;
    this.zone = user.zone;
}

User.login = (user, result) => dao.login(user, result);
User.getAll = (result) => dao.find(result);
User.register = (user,result) => dao.register(user,result);
User.update = (user, result) =>  dao.update(user,result);

module.exports = User;