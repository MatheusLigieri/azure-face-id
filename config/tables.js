const connection = require('./database');
connection.connect();

connection.query(`
CREATE SCHEMA IF NOT EXISTS dev AUTHORIZATION root;
    CREATE TABLE IF NOT EXISTS dev.person (
        id uuid PRIMARY KEY UNIQUE NOT NULL,
        cloud_id VARCHAR ( 30 ) NOT NULL,
        email VARCHAR ( 30 ),
        phone VARCHAR ( 15 ),
        cellphone VARCHAR ( 15 ),
        cpf VARCHAR (11)
);                     
`,
    (err, res) => {
        console.log(err,res)
        connection.end()
});

// connection.query('CREATE TABLE table_name( column1 datatype, column2 datatype, column3 datatype, columnN datatype, PRIMARY KEY( one or more columns ));',
//     (err, res) => {
//         console.log(err, res)
//         connection.end()
//     })