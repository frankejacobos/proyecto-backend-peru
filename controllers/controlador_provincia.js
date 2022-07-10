const { Provincia } = require('../models/provincia');
const { Departamento } = require('../models/departamento');
const createError = require('http-errors')

async function obtener_provincias(req, res) {
  const provincias = await Provincia.find().sort('nombre')
  res.status(200).send(provincias)
}
async function insertar_provincia(req, res, next) {
  const departamento = await Departamento.findOne({ nombre: req.body.departamento_nombre })
  if (!departamento) return next(createError('No existe un departamento con ese id.'))
  try {
    let provincia = new Provincia({
      nombre: req.body.nombre,
      departamento: { _id: departamento._id, nombre: departamento.nombre }
    })
    provincia = await provincia.save()
    res.status(200).send(provincia)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function buscar_provincia(req, res, next) {
  const provincia = await Provincia.findById(req.params.id)
  if (!provincia) return next(createError('No existe una provincia con ese id.'))
  res.status(200).send(provincia)
}
module.exports = { obtener_provincias, insertar_provincia, buscar_provincia }