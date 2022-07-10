const { default: mongoose } = require('mongoose')

const esquema_de_provincia = new mongoose.Schema({
  nombre: {
    type: String, required: true
  },
  departamento: {
    type: new mongoose.Schema({
      nombre: { type: String, required: true },
    }), required: true
  },
})
const Provincia = mongoose.model('Provincia', esquema_de_provincia)
module.exports = { Provincia, esquema_de_provincia }