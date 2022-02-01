const {login, signup, logout, getUserFromSession} = require('./auth.controller')
const express = require('express')

const router = express.Router()

router.get('/', getUserFromSession)
router.post('/login', login)
router.post('/signin', signup)
router.post('/logout', logout)

module.exports = router