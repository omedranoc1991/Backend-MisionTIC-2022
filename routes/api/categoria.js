const router = require('express').Router();
const categoriaController = require('../../controllers/CategoriaController.js');
const auth = require('../../middlewares/auth');

router.get('/list', categoriaController.list);

router.post('/add', categoriaController.add);

router.put('/update', categoriaController.update);

router.put('/activate', categoriaController.activate);

router.put('/deactivate', categoriaController.deactivate);

module.exports = router;