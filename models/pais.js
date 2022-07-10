const { default: mongoose } = require('mongoose')

const esquema_de_pais = new mongoose.Schema({
  nombre: {
    type: String, required: true
  },
  bandera_url: {
    type: String, required: true
  },
  ubicacion_url: {
    type: String, required: true
  },
  mapa_url: {
    type: String, required: true
  },
})
const Pais = mongoose.model('Pais', esquema_de_pais)
module.exports = { Pais, esquema_de_pais }