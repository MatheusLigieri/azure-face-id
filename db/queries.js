const conn = require('../config/database');
const table = 'dev'

class Query {
    
    getAllPerson(){
        var q = `SELECT id, cloud_id, email, phone, cellphone, cpf FROM ${table}.person WHERE deleted = false`;

        conn.query(q, (err,res) => {
            if(err){
                console.log(err)
            } else {
                console.log(res)
            }
            return res
        })
    }

    

}

module.exports = new Query;