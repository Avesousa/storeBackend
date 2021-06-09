"use strict";
const properties = require('./config/properties');
const connection = require('./config/connection');
var app = require("./app");

// Init data base
app.listen(properties.PORT,() => console.log(`[${new Date()}] Server running on port ${properties.PORT}`));

