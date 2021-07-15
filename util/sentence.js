class Sentence{

    insertRow(table){
        return `INSERT INTO ${table} SET ?`;
    }

    insertRows(table, params){
        return `INSERT INTO ${table} (${params}) VALUES ?`
    }

    find(table){
        return `SELECT * FROM ${table}`;
    }

    findDefined(table){
        return `SELECT * FROM ${table} firts`;
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
        return `UPDATE ${table} SET ? WHERE id = `;
    }
}

module.exports = new Sentence();