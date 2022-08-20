const errorResponse = (result)=>{
    return JSON.stringify({
        err: result.err||true,
        data: result.data||{},
        message: result.message||"Có lỗi",
        code:result.code||404,
    })
}
const successResponse = (result)=>{
    return JSON.stringify({
        err: result.err||false,
        data: result.data||{},
        message: result.message||"Thành công",
        code:result.code||200,
    })
}
module.exports = {
    successResponse,
    errorResponse
}