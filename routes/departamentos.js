var express = require('express');
const { obtener_departamentos, insertar_departamento, buscar_departamento } = require('../controllers/controlador_departamento');
const { validar_id } = require('../middlewares/validar_id');
const { validar_departamento } = require('../middlewares/validar_modelo');
var router = express.Router();

router.get('/', function (req, res, next) {
  obtener_departamentos(req, res)
});
router.post('/', [validar_departamento], function (req, res, next) {
  insertar_departamento(req, res, next)
});
router.get('/:id', [validar_id], async function (req, res, next) {
  buscar_departamento(req, res, next)
});
module.exports = router;
