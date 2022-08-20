const redis = require('redis');
const { successResponse } = require('../helper/responseMessage');
async function productCache(req, res, next){
    const id = req.query.id;
    const client = redis.createClient(6379)
    await client.connect()
    client.get(id).then((data)=>{
        if(data!== null){
            console.log()
            res.send(successResponse(JSON.parse(data)))
        } else{
            next()
        }
    })  
}
async function homeCache(req, res, next){
    let item = {
        type: req.query.type, 
        page: req.query.page
    } 
    item = JSON.stringify(item)
    const client = redis.createClient(6379)
    await client.connect()
    client.get(item).then((data)=>{
        if(data!== null){
            console.log('Get data from cache')
            res.send(successResponse(JSON.parse(data)))
        } else{
            next()
        }
    })  
}
module.exports = {
    productCache,
    homeCache
}