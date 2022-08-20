const config = require('config')
const sql = require('mysql2')

const HOST = config.database ?config.database.host: ''
const USER = config.database ?config.database.user: ''
const DATABASE = config.database ?config.database.database: ''
const PASSWORD = config.database ?config.database.password: ''

const connect = sql.createConnection({
    host: HOST,
    user: USER,
    database: DATABASE,
    password: PASSWORD
})
 async function execQuery(sqlQuery){
    console.log("QUERY:", sqlQuery)
    console.log("")
    return new Promise((resolve, reject)=>{
        try {
            connect.query(sqlQuery,(err, result)=>{
                if(err) reject(console.log(err))
                else resolve(result)
            })
        } catch (error) {
            resolve(console.log(error))
        }
    })
 }
 module.exports = execQuery