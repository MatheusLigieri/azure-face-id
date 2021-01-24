module.exports = app => {
    const controller = app.controllers.user
    app.route('/api/v1/user')
        .get(controller.listUser)
        .post(controller.createUser)
    app.route('/api/v1/user/:token')
        .get(controller.getUser)

}