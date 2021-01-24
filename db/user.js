const conn = require('../config/database');
const table = 'dev'

class User {
    GET(req, token) {
        if (token == null || token == undefined) {
            var q = `SELECT token FROM ${table}.user WHERE token = $1 RETURNING token`;
            conn.query(q, (err, res) => {
                if (err) {
                    req.status(400).json(res.rows)
                } else {
                    req.status(200).json(res.rows)
                }
            })
        } else {
            var q = `SELECT token FROM ${table}.user WHERE token = $1`;
            console.log(token)
            conn.query(q, token, (err, res) => {
                if (err) {
                    req.status(400).json(err)
                } else if (res.rows[0] == undefined) {
                    req.status(404).send(res.rows)
                 }
                else {
                    req.status(302).json(res.rows[0])
                }
            })
        }
    }
    POST(payload, req) {
        var q = `INSERT INTO ${table}.user(username, password, token, email) VALUES($1, $2, $3, $4) RETURNING username, token`;
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
    PATCH(values, id, req) {
        var q = 'UPDATE ' + table + '.person SET ' + values + ' WHERE id = ' + "'" + id + "'" + ' AND deleted = false RETURNING *'
        console.log(q)
        conn.query(q, (err, res) => {
            if (err) {
                console.log(err)
                req.status(400)
            } else {
                console.log(res.rows)
                req.status(200).json(res.rows[0])
            }
        })
    }
    DELETE(id, req) {
        var q = `UPDATE ${table}.person SET deleted = true WHERE id = $1 RETURNING deleted`
        console.log(q)
        conn.query(q, id, (err, res) => {
            if (err) {
                console.log(err)
                req.status(400)
            } else {
                console.log(res.rows)
                req.status(200).json(res.rows[0])
            }
        })
    }
}

module.exports = new User;