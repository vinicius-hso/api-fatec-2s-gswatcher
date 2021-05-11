const router = require('express-promise-router')()
const userController = require('../controller/userController')

router.post('/register', userController.register)

router.post('/authenticate', userController.authenticate)

module.exports = router