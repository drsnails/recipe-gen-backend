const authService = require('./auth.service')
const logger = require('../../services/logger.service');
const { getFirstRecipe } = require('../../services/utilService');
const recipeService = require('../recipe/recipe.service');
const userService = require('../user/user.service');

async function login(req, res) {
    const { username, password } = req.body
    console.log('req.body:', req.body);

    try {
        const user = await authService.login(username, password)
        req.session.user = user
        req.session.cookie.maxAge = 1000 * 60 * 60;
        req.session.save()
        res.json(user)
    } catch (err) {
        logger.error('Failed to Login ' + err)
        res.status(401).send({ err: 'Failed to Login' })
    }
}

async function signup(req, res) {
    try {
        const { username, password, email, isGoogle, googleId  } = req.body
        logger.debug(email + ', ' + username + ', ' + password)
        const account = await authService.signup(username, password, email, isGoogle, googleId)
        const recipe = getFirstRecipe(account._id)
        const recipeToAdd = await recipeService.add(recipe)
        logger.debug(`auth.route - new account created: ` + JSON.stringify(account))
        const user = await authService.login(username, password)
        req.session.user = user
        req.session.save()
        res.json(user)
    } catch (err) {
        logger.error('Failed to signup ' + err)
        res.status(500).send({ err: 'Failed to signup' })
    }
}

async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to logout' })
    }
}


async function getUserByGoogleId(req, res) {
    
    try {
        const { googleId } = req.params
        const user = await userService.getByGoogleId(googleId)
        res.json(user)
    } catch (err) {
        console.log('err:', err);
        throw err
        
    }

}

async function getUserFromSession(req, res) {
    res.json(req.session.user)

}

module.exports = {
    login,
    signup,
    logout,
    getUserFromSession,
    getUserByGoogleId
}