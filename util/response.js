const { response } = require("../app");


class Response {

  SERVER_ERROR = 'Ha ocurrido un error con el servidor';
  LOGIN_ERROR = 'Datos incorrectos';
  REGISTER_ERROR = 'No se puede realiza un registro, ya que están faltando datos';
  DATA_UNDEFINED = 'Data undefined';
  MAIL_EXIST = 'Ese correo ya está registrado en nuestra base de datos';

  start(res, err, data, message) {
    if (err) return this.error(res, 500, message[0],err);
    else if (!data) return this.error(res, 404, message[1],err);
    else return this.ok(res, message[2], data);
  }

  error(res, status, message,err) {
    console.error(`[DETAIL OF ERROR ${new Date()}] => ${err}`);
    console.error(`[RESPONSE ERROR in ${new Date()}] => ${message}`);
    return res.status(status).send({
      message: message,
      error: status
    });
  }

  ok(res, message, data) {
    console.info(`[RESPONSE SUCCESS in ${new Date()}] => ok`);
    return res.status(200).send({
      message: message,
      data: data,
    });
  }

  authError(res, errorServer, isLogin) {
    return errorServer ? this.error(res, 500, this.SERVER_ERROR) : this.error(res, 409, (isLogin ? this.LOGIN_ERROR : this.REGISTER_ERROR));
  }

}

module.exports = new Response();
