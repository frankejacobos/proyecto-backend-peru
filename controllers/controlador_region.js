const { Region } = require('../models/region');
const { Pais } = require('../models/pais');
const createError = require('http-errors');

async function obtener_regiones(req, res) {
  const regiones = await Region.find().sort('nombre')
  res.status(200).send(regiones)
}
async function insertar_region(req, res, next) {
  const pais = await Pais.findOne({ nombre: req.body.pais_nombre })
  if (!pais) return next(createError('Pais no encontrado.'))
  try {
    let region = new Region({
      nombre: req.body.nombre, imagen_url: req.body.imagen_url,
      cant_de_departamentos: req.body.cant_de_departamentos,
      longitud_km: req.body.longitud_km,
      pais: { _id: pais._id, nombre: pais.nombre },
    })
    region = await region.save()
    res.status(200).send(region)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function buscar_region(req, res, next) {
  const region = await Region.findById(req.params.id)
  if (!region) return next(createError('No existe una region con ese id.'))
  res.status(200).send(region)
}
module.exports = { obtener_regiones, insertar_region, buscar_region }
