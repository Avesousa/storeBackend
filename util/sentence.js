class Sentence{

    insertRow(table){
        return `INSERT INTO ${table} SET ?`;
    }

    find(table){
        return `SELECT * FROM ${table}`;
    }

    findById(table){
        return `SELECT * FROM ${table} WHERE id = ?`;
    }

    findByStore(table){
        return `SELECT * FROM ${table} WHERE store = ?`;
    }

    deleteById(table){
        return `DELETE FROM ${table} WHERE id = ?`;
    }

    update(table){
        return `UPDATE ${table} SET ? WHERE id = :id`;
    }
}

module.exports = new Sentence();