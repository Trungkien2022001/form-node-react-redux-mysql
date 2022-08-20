const execQuery = require("../models")

async function authenticate(req, res, next){
    try {
        const auth =  req.headers ? req.headers.authorization : '{}'
        if( !auth){
            res.end('Ban khong co quyen truy cap api nay')
        }else{
        const token =  JSON.parse(auth)
        console.log(token)
        const result = await execQuery(`select * from user where username = '${token.username}' and token = '${token.token}'`)
        if(result.length == 0){
            res.status(404).end('Bạn không có quyền truy cập api này, Hãy đăng nhập với tư cách quản trị viên')
        } else next()
    }
        
    } catch (error) {
        console.log(error)
        res.end('Bạn không có quyền truy cập API này')
    }
}
module.exports = {
    authenticate
}