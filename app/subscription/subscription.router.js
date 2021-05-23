'use stricts'

const express = require("express");
const subscriptionController = require('./subscription.controller');
const routerSubscription = express.Router();

//Router subscription
routerSubscription.get("/save/:email", subscriptionController.saveEmail);

module.exports = routerSubscription;