module.exports = app => {
  // const personDB = app.data.person
  const Person = require('../../db/person')
  const controller = {};
  controller.listPersons = (req, res) => {
    Person.GET(res)
    console.log(req.params.id)

  }
  controller.createPerson = (req, res) => {
    var payload = req.body
    var array = []
    console.log(req.params.id)
    Object.keys(payload).forEach(key => {
      array.push(payload[key])
    });
    Person.POST(array, res)
  }

  controller.listPersonByID = (req, res) => {
    var array = []
    array.push(req.params.id)
    Person.GET(res, array)
  }
  controller.patchPersonByID = (req, res) => {
    var q = '';
    var body = req.body;
    console.log(body)
    Object.keys(body).forEach(key => {
      q = q + key + " = '" + body[key] + "', "
    })
    q = q.slice(0, -2);
    Person.PATCH(q, req.params.id, res)
  }
  controller.deletePersonByID = (req, res) => {
    var array = []
    array.push(req.params.id)
    Person.DELETE(array, res)
  }

  return controller;
}