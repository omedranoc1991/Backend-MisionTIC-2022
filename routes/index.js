const router = require('express').Router();
const apiRouterUser = require('./api/users.js');
const apiRouterCategoria = require('./api/categoria.js');
const apiRouterArticulo = require('./api/articulo.js');

router.use('/usuario', apiRouterUser);
router.use('/categoria', apiRouterCategoria);
router.use('/articulo', apiRouterArticulo);


module.exports = router;