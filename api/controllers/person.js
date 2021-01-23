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


  return controller;
}