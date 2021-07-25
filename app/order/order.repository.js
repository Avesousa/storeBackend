'use strict'
const Repository = require("../../util/repository");

class OrderRepository extends Repository{
    table = "order";
    table_product = "order_product"

    save(order, result){

        let queryInsertionOrder = this.makeQueryInsert(order);

        this.con.query(queryInsertionOrder, (err, res) => {
            
            if(err){
                return this.response.error(result, 400, `ORDER::REPOSITORY::Error [save] => ${this.response.SAVE_ERROR}`, err);
            }else if(res.insertId){
                
                let idOrder = res.insertId;
                console.log("ORDER::REPOSITORY::save Product order - ID ORDER -  => ",idOrder);
                this.con.query(this.makeQueryInsertProduct(order.products, idOrder), (err, res) => {
                    if(err){
                        console.log("ORDER::RESPOSITORY::PRODUCT_ORDER::Error [save] =>",err);
                        return this.response.error(result, 400, `Error: ${this.response.SAVE_ERROR}`);
                    }else{
                       return this.response.ok(result, "OK" , 
                        {
                            order: idOrder,
                            ...res
                        });
                    }
                });

            }else{
               return this.response.error(result, 409, `No se encontró resultado`, null);
            }
        });

    }

    findByUser(user,store,result){
        let query = `${this.sentence.findByStore(this.table)} AND user = ${user} ORDER BY description ASC`;
        this.con.query(query, store, (err,res) => {
            return err ? this.response.error(result, 400, `Error [FIND] => ${this.response.FIND_ERROR}`, err) :
            ((res.length) ? this.response.ok(result, "OK" , res) :
            this.response.error(result, 409, `No se encontró resultado`, null));
        });
    }


    makeQueryInsertProduct(products, idOrder){

        let query = 'INSERT INTO store.productorder (`order`, product, total, quantity, state) VALUES';
        let firtsFlag = true;
        products.forEach( (product) => {
            query += `${firtsFlag ? '' : ','} (${idOrder}, ${product.id}, ${product.totalBuy}, ${product.quantyBuy},1)`;
            firtsFlag = false;
        } );
        console.log('Query of product insert => ', query);
        return query;
    }


    makeQueryInsert(order){
        let ob = {
            user:order.user.id,
            zone: order.user.zone.id,
            price:order.user.zone.price,
            store: parseInt(order.store)
        }
        return `INSERT INTO store.order(user,zone,pricezone,date,state,store) VALUES(${ob.user},${ob.zone},${ob.price},DEFAULT,1,${ob.store})`;
    }

}

module.exports = OrderRepository;