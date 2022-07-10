const { default: mongoose } = require('mongoose')

const esquema_de_region = new mongoose.Schema({
  nombre: {
    type: String, required: true
  },
  imagen_url: {
    type: String, required: true
  },
  cant_de_departamentos: {
    type: Number, required: true
  },
  longitud_km: {
    type: Number, required: true
  },
  pais: {
    type: new mongoose.Schema({
      nombre: { type: String, required: true },
    }), required: true
  },
})
const Region = mongoose.model('Region', esquema_de_region)
module.exports = { Region, esquema_de_region }