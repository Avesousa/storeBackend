"use strict";
const RepositoryAuth = require("../../util/repositoryAuth");
const RepositoryZone = require("../../util/repository");

class UserRepository extends RepositoryAuth {
  table = "user";
  zone = null;

  findZone(user, callback) {
    let sql = `${this.sentence.find("zone")} WHERE id = (SELECT zone FROM user WHERE id = ${user.id})`;
    console.log("FIND ()=>>>" + sql);
    this.con.query(sql, (err, res) => {
      this.userSecurity = {
        id: user.id ? user.id : 0,
        name: user.name ? user.name : "",
        doc: user.doc ? user.doc : "",
        mail: user.mail ? user.mail : "",
        street: user.street ? user.street : "",
        number: user.number ? user.number : "",
        zone: res[0] ? res[0] : null,
      };
      callback();
    });
  }

  getCondition() {
    if (this.user.mail) {
      if (this.user.doc) {
        if (this.user.store) {
          return ` WHERE mail = '${this.user.mail}' OR doc = ${this.user.doc}`;
        } else {
          this.validation = false;
          this.message = this.response.STORE_NOT_EXIST;
        }
      } else {
      }
    } else {
      this.validation = false;
      this.message = this.response.MAIL_NOT_EXIST;
    }
  }

  addUserSecurity(user, callback) {
    this.findZone(user, callback);
  }
}

module.exports = UserRepository;
