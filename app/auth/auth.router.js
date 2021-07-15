const auth = require("./auth.controller");
const express = require('express');
const routerAuth = express.Router();

routerAuth.get('/verify', auth.verify);

routerAuth.post('/register', auth.registerUser);
routerAuth.post('/login', auth.loginUser);
routerAuth.put('/update', auth.updateUser);

routerAuth.post('admin/register', auth.registerAdmin);
routerAuth.post('admin/login', auth.loginAdmin);

module.exports = routerAuth;