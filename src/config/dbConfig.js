const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'root',
    database: 'tutorialnodejs',
    port: 3306
})

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log("Conexión a MySQL exitosa")
})

module.exports = db;