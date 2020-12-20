const router = require('express').Router();
const userController = require('../../controllers/UserController.js');
const auth = require('../../middlewares/auth');
const models = require('../../models');
router.get('/list', userController.list);

router.post('/register', auth.verifyUsuario, userController.register);

router.post('/login', userController.login);

router.put('/update', auth.verifyUsuario, userController.update);

module.exports = router;