const connection = require('./database');
connection.connect();
connection.query('CREATE TABLE table_name( column1 datatype, column2 datatype, column3 datatype, columnN datatype, PRIMARY KEY( one or more columns ));',
    (err, res) => {
        console.log(err, res)
        connection.end()
    })