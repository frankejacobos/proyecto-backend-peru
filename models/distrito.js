const { default: mongoose } = require('mongoose')

const esquema_de_distrito = new mongoose.Schema({
  nombre: {
    type: String, required: true
  },
  provincia: {
    type: new mongoose.Schema({
      nombre: { type: String, required: true },
    }), required: true
  },
})
const Distrito = mongoose.model('Distrito', esquema_de_distrito)
module.exports = { Distrito, esquema_de_distrito }