class CreateTable {
    init(connection) {
        this.connection = connection;
        this.createSchema()
        this.createTablePerson()
        this.createTableActivities()
    }

    createSchema() {
        const querySchema = 'CREATE SCHEMA IF NOT EXISTS dev AUTHORIZATION root;'
        this.connection.query(querySchema, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res)
                console.log('success')

            }
        })
    }
    createTablePerson() {
        const queryPerson = 'CREATE TABLE IF NOT EXISTS dev.person (id uuid PRIMARY KEY UNIQUE NOT NULL, cloud_id VARCHAR ( 30 ) NOT NULL, email VARCHAR ( 30 ),phone VARCHAR ( 15 ),cellphone VARCHAR ( 15 ),cpf VARCHAR (11)); '
        this.connection.query(queryPerson, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res)
                console.log('success')
            }
        })

    }
    createTableActivities() {
        const queryPerson = `CREATE TABLE IF NOT EXISTS dev.activities 
            (
                id uuid PRIMARY KEY UNIQUE NOT NULL,
                person_id uuid REFERENCES dev.person (id) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );`
        this.connection.query(queryPerson, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res)
                console.log('success')
            }
        })
    }
}

module.exports = new CreateTable