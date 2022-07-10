var express = require('express');
const { insertar_region, obtener_regiones, buscar_region } = require('../controllers/controlador_region');
const { validar_id } = require('../middlewares/validar_id');
const { validar_region } = require('../middlewares/validar_modelo');
var router = express.Router();

router.get('/', function (req, res, next) {
  obtener_regiones(req, res)
});
router.post('/', [validar_region], function (req, res, next) {
  insertar_region(req, res, next)
});
router.get('/:id', [validar_id], async function (req, res, next) {
  buscar_region(req, res, next)
});
module.exports = router;
