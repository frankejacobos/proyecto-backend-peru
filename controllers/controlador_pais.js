const createError = require('http-errors');
const { Pais } = require('../models/pais');

async function obtener_paises(req, res) {
  const paises = await Pais.find().sort('nombre')
  res.status(200).send(paises)
}
async function insertar_pais(req, res) {
  try {
    let pais = new Pais(req.body)
    pais = await pais.save()
    res.status(200).send(pais)
  } catch (error) {
    return next(createError(error.message))
  }
}
async function buscar_pais(req, res, next) {
  const pais = await Pais.findById(req.params.id)
  if (!pais) return next(createError('No existe un pais con ese id.'))
  res.status(200).send(pais)
}
module.exports = { obtener_paises, insertar_pais, buscar_pais }