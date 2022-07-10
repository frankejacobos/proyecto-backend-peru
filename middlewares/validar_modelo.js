const createError = require('http-errors')
const Joi = require('joi')

function validar_pais(req, res, next) {
  const { error } = Joi.object({
    nombre:
      Joi.string().required(),
    bandera_url:
      Joi.string().required(),
    ubicacion_url:
      Joi.string().required(),
    mapa_url:
      Joi.string().required(),
  }).validate(req.body)
  if (error) { next(createError(error.message)) }
  next()
}
function validar_region(req, res, next) {
  const { error } = Joi.object({
    nombre:
      Joi.string().required(),
    pais_nombre:
      Joi.string().required(),
    imagen_url:
      Joi.string().required(),
    cant_de_departamentos:
      Joi.number().required(),
    longitud_km:
      Joi.number().required(),
  }).validate(req.body)
  if (error) { next(createError(error.message)) }
  next()
}
function validar_departamento(req, res, next) {
  const { error } = Joi.object({
    nombre:
      Joi.string().required(),
    region_nombre:
      Joi.string().required(),
    capital:
      Joi.string().required(),
    bandera_url:
      Joi.string().required(),
    ubicacion_url:
      Joi.string().required(),
    area:
      Joi.number().required(),
  }).validate(req.body)
  if (error) { next(createError(error.message)) }
  next()
}
function validar_provincia(req, res, next) {
  const { error } = Joi.object({
    nombre:
      Joi.string().required(),
    departamento_nombre:
      Joi.string().required(),
  }).validate(req.body)
  if (error) { next(createError(error.message)) }
  next()
}
function validar_distrito(req, res, next) {
  const { error } = Joi.object({
    nombre:
      Joi.string().required(),
    provincia_nombre:
      Joi.string().required(),
  }).validate(req.body)
  if (error) { next(createError(error.message)) }
  next()
}
module.exports = { validar_pais, validar_region, validar_departamento, validar_provincia, validar_distrito }