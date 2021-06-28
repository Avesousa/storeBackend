
class Response {
  
  SAVE_ERROR = 'Ha ocurrido un error al guardar en la tabla';
  FIND_ERROR = 'Ha ocurrido un error al buscar en la tabla';
  UPDATE_ERROR = 'Ha ocurrido un error al actualizar la tabla';
  DELETE_ERROR = 'Ha ocurrido un error al eliminar en la tabla';

  SERVER_ERROR = 'Ha ocurrido un error con el servidor';
  LOGIN_ERROR = 'Datos incorrectos';
  REGISTER_ERROR = 'No se puede realiza un registro, ya que están faltando datos';
  DATA_UNDEFINED = 'Data undefined';
  MAIL_EXIST = 'Ese correo ya está registrado en nuestra base de datos';
  MAIL_OR_DOC_EXIST = 'El correo y/o documento ingresado ya existe en nuestra base de datos';
  MAIL_NOT_EXIST = 'El correo no se encuentra registrado';
  DOC_NOT_EXIST = 'Se necesita el documento para validar';
  STORE_NOT_EXIST = 'Debe contener un código de tienda';
  MAIL_OR_PASS_NOT_EXIST = 'Ha ocurrido un erorr al querer loguear (faltan algunos datos)';

  start(res, err, data, message) {
    if (err) return this.error(res, 500, message[0],err);
    else if (!data) return this.error(res, 404, message[1],err);
    else return this.ok(res, message[2], data);
  }

  error(res, status, message,err, data) {
    console.error(`[DETAIL OF ERROR ${new Date()}] => ${err}`);
    console.error(`[RESPONSE ERROR in ${new Date()}] => ${message}`);
    return res.status(status).send({
      message: message,
      error: status,
      data: data
    });
  }

  ok(res, message, data) {
    console.info(`[RESPONSE SUCCESS in ${new Date()}] => ok`);
    return res.status(200).send({
      message: message,
      data: data,
    });
  }

  authError(res, errorServer, isLogin,error) {
    return errorServer ? this.error(res, 500, this.SERVER_ERROR,error) : this.error(res, 409, (isLogin ? this.LOGIN_ERROR : this.REGISTER_ERROR), error, {login:false});
  }

}

module.exports = new Response();
