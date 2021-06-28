const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const time = 24 * 24 * 60;
const secretKey = 'jklOp1234';
const resp = require("../util/response");

module.exports = {
    register: function (object) {
        return jwt.sign(object, secretKey, { expiresIn: time });
    },
    verifyToken: function (req, res) {
        try {
            let token = req.headers.authorization.split(' ')[1];
            let data = jwt.verify(token, secretKey);
            data = { ...data, response:true };
            return resp.ok(res, 'Token', data);
        } catch (error) {
            console.log(`[ERROR ${new Date()}] error => ${error.message}`);
            return resp.ok(res,`Un error de auntenticación => ${error.message}`,{response:false});
        }
    },
    verify: function (req, res, next) {
        if (!req.headers.authorization)
            return resp.error(res, 402, 'authorization undefined');

        let token = req.headers.authorization.split(' ')[1];

        if (token == null || token == 'null')
            return resp.error(res, 403, 'token undefined');

        try {
            let data = jwt.verify(token, secretKey);
            req.userData = {
                id: data.id,
                store: data.store
            }
            next();
        } catch (e) {
            console.log(e);
            return resp.error(res, 405, 'token not valid');
        }


    },
    passwordConvert: function (pass) {
        return bcrypt.hashSync(pass);
    },
    passwordVerify: function (pass, very) {
        return bcrypt.compareSync(pass, very);
    }
}