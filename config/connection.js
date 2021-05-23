const mongo = require('mongoose');
const serverDB = require('./properties').SERVERDB;

module.exports = () => {
    mongo.connect(serverDB, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`[${new Date()}] Server database connected on ${serverDB}`))
    .catch((err) => console.log(`[${new Date()}] Connection has error ${err}`))

    process.on('SIGINT', ()=>{
        mongo.connection.close(() => {
            console.log(`[${new Date()}] Sever database is disconnected`);
            process.exit(0);
        })
    })

}