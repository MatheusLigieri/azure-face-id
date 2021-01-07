module.exports = app => {
    const controller = app.controllers.person
    app.route('/api/v1/person')
    .get(controller.listPersons)
    //POST
    .post(controller.createPersons)
}