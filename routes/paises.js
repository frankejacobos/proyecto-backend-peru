var express = require('express');
const { obtener_paises, insertar_pais, buscar_pais } = require('../controllers/controlador_pais');
const { validar_id } = require('../middlewares/validar_id');
const { validar_pais } = require('../middlewares/validar_modelo');
var router = express.Router();

router.get('/', function (req, res, next) {
  obtener_paises(req, res)
});
router.post('/', [validar_pais], function (req, res) {
  insertar_pais(req, res)
});
router.get('/:id', [validar_id], async function (req, res, next) {
  buscar_pais(req, res, next)
});
module.exports = router;
