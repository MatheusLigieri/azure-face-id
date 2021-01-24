const user = require('../../db/user');

module.exports = app => {
    // const personDB = app.data.person
    const btoa = require('btoa');
    const User = require('../../db/user')
    const controller = {};
    controller.listUser = (req, res) => {

    }
    controller.getUser = (req, res) => {
        var array = []
        array.push(req.params.token)
        User.GET(res, array)
    }
    controller.createUser = (req, res) => {
        var array = []
        console.log(req.body.username)
        console.log(req.body.token)
        req.body.password = btoa(req.body.password)
        req.body.token = btoa(req.body.username + ':' + req.body.password)
        console.log(req.body)
        Object.keys(req.body).forEach(key => {
            array.push(req.body[key])
        });
        console.log(array)
        User.POST(array, res)
    }

    return controller;
}