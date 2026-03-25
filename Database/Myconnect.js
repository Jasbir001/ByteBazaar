
const mysql = require('mysql2')

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password :'',
    database : 'demo',
    
    waitForConnections : true,
    connectionLimit:10,
    multipleStatement : true
})
pool.getConnection((err,connection)=>{
    if(err) throw err;
    console.log('database connected sucessful ID:' +connection.threadId);
})
module.exports =pool