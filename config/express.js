const express = require('express');
const bodyParser = require('body-parser');
const config = require('./default.json');
const consign = require('consign')

module.exports = () => {
    const app = express();


    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.server.port);
    // MIDDLEWARES
    app.use(bodyParser.json());

    // ENDPOINTS
    consign({ cwd: 'api' })
        .then('data')
        .then('controllers')
        .then('routes')
        .into(app)
    return app;
};