'use strict'
const Repository = require("../../util/repository");

class BrandsRepository extends Repository{
    table = "brands";
}

module.exports = BrandsRepository;