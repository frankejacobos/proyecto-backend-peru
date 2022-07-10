var express = require('express');
const { obtener_distritos, insertar_distrito, buscar_distrito } = require('../controllers/controlador_distrito');
const { validar_id } = require('../middlewares/validar_id');
const { validar_distrito } = require('../middlewares/validar_modelo');
var router = express.Router();

router.get('/', function (req, res, next) {
  obtener_distritos(req, res)
});
router.post('/', [validar_distrito], function (req, res, next) {
  insertar_distrito(req, res, next)
});
router.get('/:id', [validar_id], async function (req, res, next) {
  buscar_distrito(req, res, next)
});
module.exports = router;
