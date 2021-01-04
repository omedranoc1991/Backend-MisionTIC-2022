const router = require('express').Router();
const userController = require('../../controllers/UserController.js');
const auth = require('../../middlewares/auth');
const models = require('../../models');
router.get('/list', userController.list);

router.post('/add', auth.verifyUsuario, userController.add);

router.post('/login', userController.login);

router.put('/update', auth.verifyUsuario, userController.update);

router.put('/activate', userController.activate);

router.put('/deactivate', userController.deactivate);


module.exports = router;