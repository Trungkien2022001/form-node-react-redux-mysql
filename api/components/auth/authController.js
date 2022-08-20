const jwt = require('jsonwebtoken')
const { errorResponse, successResponse } = require('../../helper/responseMessage')
const sql = require('../../models')
const { fetchLogin, fetchRegister, fetchLoginWithFB, fetchChangeInfo } = require('./authService')

async function login(req, res) {
    const result = await fetchLogin(req, res)
    if (result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function loginWithFB(req, res) {
    const result = await fetchLoginWithFB(req, res)
    if (result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function register(req, res) {
    const result = await fetchRegister(req, res)
    if (result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function changeInfo(req, res) {
    console.log("first")
    const result = await fetchChangeInfo(req, res)
    if (result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}

module.exports = {
    login,
    loginWithFB,
    register,
    changeInfo
}