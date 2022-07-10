const { default: mongoose } = require('mongoose')
const { esquema_de_region } = require('./region')

const esquema_de_departamento = new mongoose.Schema({
  nombre: {
    type: String, required: true
  },
  capital: {
    type: String, required: true
  },
  bandera_url: {
    type: String, required: true
  },
  ubicacion_url: {
    type: String, required: true
  },
  area: {
    type: Number, required: true
  },
  region: {
    type: new mongoose.Schema({
      nombre: { type: String, required: true },
    }), required: true
  },
})
const Departamento = mongoose.model('Departamento', esquema_de_departamento)
module.exports = { Departamento, esquema_de_departamento }