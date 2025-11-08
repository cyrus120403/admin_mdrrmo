const mysql = require('mysql');

const connection = mysql.createConnection({

    host: 'blt89ows0twqzat0ohwy-mysql.services.clever-cloud.com',
    user: 'ury2paxu6idbek0i',
    password: 'J2Ry4Y8f5807cLPvcRN8',
    database: 'blt89ows0twqzat0ohwy',

});

connection.connect((err) => {

    if(err){

        console.log(`Error Connecting on the database MYSQL: ${err}`);
        return;

    }else{

        console.log(`Successfully Connected to ${connection.config.database}`);

    }

});


module.exports = connection;
