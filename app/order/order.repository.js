'use strict'
const Repository = require("../../util/repository");

class OrderRepository extends Repository{
    table = "order";
    table_product = "order_product"

    save(order, result){

        let orderNew = {
            user_id: order.user.id,
            zone_id: order.user.zone.id,
            zone_price: order.user.zone.price,
            state: 1,
            store: order.store   
        }

        let queryInsertionOrder = this.sentence.insertRow(this.table);
        let queryInsertionProduct = this.sentence.insertRows(this.table_product, "order_id, product_id, product_total, product_quantity, state");

        this.con.query(queryInsertionOrder, orderNew, (err, res) => {
            let orderId = res.insertId;
            return err ? this.response.error(result, 400, `Error [FIND] => ${this.response.SAVE_ERROR}`, err) :
            ((orderId) ? (
                this.con.query(queryInsertionProduct, this.getProductsId(order.products, orderid), (err, res) => {
                    return err ? this.response.error(result, 400, `Error [FIND] => ${this.response.FIND_ERROR}`, err) :
                    this.response.ok(result, "OK" , res);
            })
            ) :
            this.response.error(result, 409, `No se encontró resultado`, null));
        })

    }

    findByUser(user,store,result){
        let query = `${this.sentence.findByStore(this.table)} AND user = ${user} ORDER BY description ASC`;
        this.con.query(query, store, (err,res) => {
            return err ? this.response.error(result, 400, `Error [FIND] => ${this.response.FIND_ERROR}`, err) :
            ((res.length) ? this.response.ok(result, "OK" , res) :
            this.response.error(result, 409, `No se encontró resultado`, null));
        });
    }


    getProductsId(products, orderId){
        return products.map( (product) => {
            [orderId, product.id, product.totalBuy, product.quantityBuy,1]
        } );
    }
}

module.exports = OrderRepository;