module.exports = app => {
    const controller = app.controllers.person
    app.route('/api/v1/person')
        .get(controller.listPersons)
        .post(controller.createPerson)
    app.route('/api/v1/person/:id')
        .get(controller.listPersonByID)
}