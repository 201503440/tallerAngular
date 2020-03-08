const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Pablo#123',
        database: 'Taller',
        insecureAuth : true
    });
}