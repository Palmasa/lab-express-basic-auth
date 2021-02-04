const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user.controller')

router.get('/thanks', userController.registerThanks)
router.get('/register', userController.registerView)
router.post('/register', userController.register)

module.exports = router;