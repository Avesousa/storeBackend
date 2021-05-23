const admin = require("./auth.controller");
const express = require('express');
const routerAuth = express.Router();

routerAuth.post('/register',admin.register);
routerAuth.post('/login', admin.login);
routerAuth.get('/verify', admin.verify);

module.exports = routerAuth;