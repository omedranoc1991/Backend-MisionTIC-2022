const router = require('express').Router();
const ArticuloController = require('../../controllers/ArticuloController.js');
const auth = require('../../middlewares/auth');

router.get('/list', ArticuloController.list);

router.post('/add', ArticuloController.add);

router.put('/update', ArticuloController.update);

router.put('/activate', ArticuloController.activate);

router.put('/deactivate', ArticuloController.deactivate);

module.exports = router;