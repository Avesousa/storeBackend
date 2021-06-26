'use strict'

const security = require("../../config/security");
const response = require("../../util/response");
const RepositoryAuth = require("../../util/repositoryAuth");

class AdminRepository extends RepositoryAuth{
    table = "admin_store";
    CONDICION =" WHERE mail = :mail";
}

module.exports = AdminRepository;