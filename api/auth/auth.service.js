const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')


async function login(username, password) {
    logger.debug(`auth.service - login with username: ${username}`)

    const user = await userService.getByUsername(username)
    if (!user) return Promise.reject('Invalid username or password')
    password = password.toString();
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid username or password')
    

    delete user.password
    return user
}

async function signup(username, password, email,isGoogle, googleId) {
    const saltRounds = 10

    logger.debug(`auth.service - signup with username: ${username}, email: ${email}`)
    if (!username || !password || !email) return Promise.reject('email, username and password are required!')
    // data must be a string and salt must either be a salt string or a number of rounds
    password = password.toString();
    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ username, password: hash, email, isGoogle, googleId })
}

module.exports = {
    signup,
    login,
}