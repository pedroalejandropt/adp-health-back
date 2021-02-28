const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require("../models");

module.exports = function () {
    let server = express(),
        create,
        start;

    create = (config, db) => {
        let routes = require('../routes');
        // set all the server things
        server.set('port', config.port);
        
        // add middleware to parse the json
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({
            extended: false
        }));

        //connect the database
        dbConfig.sequelize.sync(/* { force: true } */);

        // Set up routes
        routes.init(server);
    };

    
    start = () => {
        let port = server.get('port');
        server.listen(port, function () {
            console.log('Express server listening on - http://' + 'hostname' + ':' + port);
        });
    };
    return {
        create: create,
        start: start
    };
};