const app = require('./config/express')();
const port = app.get('port');
const connection = require('./config/database');
const CreateTable = require('./config/tables')

connection.connect(err => {
  if (err) {
    console.log(err)
  } else {
    console.log('connected')
    CreateTable.init(connection)
  }

})

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/pages/index.html");
});
app.get('/admin', function(req, res) {
  res.sendFile(__dirname + "/pages/admin.html");
});

