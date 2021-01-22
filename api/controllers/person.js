module.exports = app => {
  // const personDB = app.data.person
  const Person = require('../../db/person')
  const controller = {};

  controller.listPersons = (req, res) => {
    Person.GET(res)
  }

  controller.createPerson = (req, res) => {
    var payload = req.body
    console.log(payload)
    console.log('typeof')
    console.log(typeof(payload))
    Person.POST(payload, res)
  }

  return controller;
}