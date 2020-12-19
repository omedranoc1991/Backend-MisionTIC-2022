const router = require('express').Router();
const userController = require('../../controllers/UserController.js');

router.get('/list', userController.list);

router.post('/register', userController.register);

router.post('/signin', userController.signin);

router.put('/update', userController.update);

module.exports = router;