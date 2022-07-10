const config = require('config')
require('../utils/logger')

module.exports = function () {
  if (!config.get('clave-api-database')) {
    throw new Error('[FATAL ERROR]: clave para la api no encontrada.')
  }
}