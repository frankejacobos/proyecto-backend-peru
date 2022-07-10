const createError = require('http-errors');
const { Departamento } = require('../models/departamento');
const { Region } = require('../models/region');

async function obtener_departamentos(req, res) {
  const departamentos = await Departamento.find().sort('nombre')
  res.status(200).send(departamentos)
}
async function insertar_departamento(req, res, next) {
  const region = await Region.findOne({ nombre: req.body.region_nombre })
  if (!region) return next(createError('Region no encontrada.'))
  try {
    let departamento = new Departamento({
      nombre: req.body.nombre,
      capital: req.body.capital,
      bandera_url: req.body.bandera_url,
      ubicacion_url: req.body.ubicacion_url,
      area: req.body.area,
      region: { _id: region._id, nombre: region.nombre }
    })
    departamento = await departamento.save()
    res.status(200).send(departamento)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function buscar_departamento(req, res, next) {
  const departamento = await Departamento.findById(req.params.id)
  if (!departamento) return next(createError('No existe un departamento con ese id.'))
  res.status(200).send(departamento)
}
module.exports = { obtener_departamentos, insertar_departamento, buscar_departamento }