const { Distrito } = require('../models/distrito');
const { Provincia } = require('../models/provincia');
const createError = require('http-errors')

async function obtener_distritos(req, res) {
  const distritos = await Distrito.find().sort('nombre')
  res.status(200).send(distritos)
}
async function insertar_distrito(req, res, next) {
  const provincia = await Provincia.findOne({ nombre: req.body.provincia_nombre })
  if (!provincia) return next(createError('No existe una provincia con ese id.'))
  try {
    let distrito = new Distrito({
      nombre: req.body.nombre,
      provincia: { _id: provincia._id, nombre: provincia.nombre }
    })
    distrito = await distrito.save()
    res.status(200).send(distrito)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function buscar_distrito(req, res, next) {
  const distrito = await Distrito.findById(req.params.id)
  if (!distrito) return next(createError('No existe un distrito con ese id.'))
  res.status(200).send(distrito)
}
module.exports = { obtener_distritos, insertar_distrito, buscar_distrito }