'use strict'

const Subscription = require('./subscription.schema');
const resp = require('../../util/response');

const controllerSubscription = {

    saveEmail: function(req,res){
        let subscription = new Subscription();
        subscription.email = req.params.email;
        subscription.store = req.headers.store;

        subscription.save((err,subscription) => {
            return resp.start(res, err, subscription, [
                "Error al guardar la subscripción",
                "No se ha podido guardar la subscripción",
                "Se ha enviado correctamente la subscripción",
              ]);
        })

    }

}

module.exports = controllerSubscription;