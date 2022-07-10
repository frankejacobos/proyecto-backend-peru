const mongoose = require('mongoose')
const logger = require('../utils/logger')
require('express-async-errors')
const config = require('config')

module.exports = function () {
  const db = config.get('db')
  mongoose.connect(db)
    .then(() => { logger.info(`Conectado a ${db}...`) })
    .catch(() => { logger.error(`No se pudo conectar a ${db}...`) })
}