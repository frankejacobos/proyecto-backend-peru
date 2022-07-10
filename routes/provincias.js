var express = require('express');
const { obtener_provincias, insertar_provincia, buscar_provincia } = require('../controllers/controlador_provincia');
const { validar_id } = require('../middlewares/validar_id');
const { validar_provincia } = require('../middlewares/validar_modelo');
var router = express.Router();

router.get('/', function (req, res, next) {
  obtener_provincias(req, res)
});
router.post('/', [validar_provincia], function (req, res, next) {
  insertar_provincia(req, res, next)
});
router.get('/:id', [validar_id], async function (req, res, next) {
  buscar_provincia(req, res, next)
});
module.exports = router;
