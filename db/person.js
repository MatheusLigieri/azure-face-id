const { pauseDrain } = require('../config/database');
const conn = require('../config/database');
const table = 'dev'

class Person {
    GET(req, id) {

        if (id == null || id == undefined) {
            var q = `SELECT id, cloud_id, email, phone, cellphone, cpf FROM ${table}.person WHERE deleted = false`;

            conn.query(q, (err, res) => {
                if (err) {
                    req.status(400).json(res.rows)
                } else {
                    req.status(200).json(res.rows)
                }
            })
        } else {
            var q = `SELECT id, cloud_id, email, phone, cellphone, cpf FROM ${table}.person WHERE deleted = false AND id = $1`;

            conn.query(q, id, (err, res) => {
                if (err) {
                    req.status(400).json(err)
                    console.log(err)
                } else {
                    req.status(200).json(res.rows)
                }
            })
        }

    }

    POST(payload, req) {
        var q = `INSERT INTO ${table}.person(cloud_id, email, phone, cellphone, cpf) VALUES($1, $2, $3, $4, $5) RETURNING *`;
        console.log(payload)
        conn.query(q, payload, (err, res) => {
            if (err) {
                console.log(err)
                req.status(400)
            } else {
                console.log(res.rows)
                req.status(201).json(res.rows[0])
            }
        })
    }
}

module.exports = new Person;