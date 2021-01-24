const table = 'dev'

class CreateTable {
    init(connection) {
        this.connection = connection;
        this.createSchema();
        this.addExtension();
        this.createTablePerson();
        this.createTableActivities();
        this.createTableUser();
    }

    createSchema() {
        const querySchema = `CREATE SCHEMA IF NOT EXISTS ${table} AUTHORIZATION root;`
        this.connection.query(querySchema, (err, res) => {
            if (err) {
                console.log(err)
            } else {
            }
        })
    }

    createTablePerson() {
        const queryPerson = `create table if not exists ${table}.person ( id uuid primary key unique not null default gen_random_uuid() ,
        deleted boolean not null default '0',
        cloud_id VARCHAR (30) not null,
        email VARCHAR (30) unique,
        phone VARCHAR (15),
        cellphone VARCHAR (15),
        cpf VARCHAR (15));`
        this.connection.query(queryPerson, (err, res) => {
            if (err) {
                console.log(err)
            } else {
            }
        })

    }

    addExtension() {
        var q = `CREATE EXTENSION IF NOT EXISTS "pgcrypto";`
        this.connection.query(q, (err, res) => {
            if (err) {
                console.log(err)
            } else {
            }
        })
    }

    createTableActivities() {
        const queryPerson = `CREATE TABLE IF NOT EXISTS ${table}.activities 
            (
                id uuid PRIMARY KEY UNIQUE NOT NULL default gen_random_uuid() ,
                person_id uuid REFERENCES ${table}.person (id) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );`
        this.connection.query(queryPerson, (err, res) => {
            if (err) {
                console.log(err)
            } else {
            }
        })
    }
    createTableUser() {
        const queryPerson = `CREATE TABLE IF NOT EXISTS ${table}.user 
            (
                id uuid PRIMARY KEY UNIQUE NOT NULL default gen_random_uuid() ,
                username varchar(25) NOT NULL,
                password varchar (25) NOT NULL,
                token varchar(200) NOT NULL,
                email varchar(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );`
        this.connection.query(queryPerson, (err, res) => {
            if (err) {
                console.log(err)
            } else {
            }
        })
    }


}

module.exports = new CreateTable