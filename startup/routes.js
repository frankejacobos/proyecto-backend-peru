const paisesRouter = require('../routes/paises')
const regionesRouter = require('../routes/regiones')
const departamentosRouter = require('../routes/departamentos')
const provinciasRouter = require('../routes/provincias')
const distritosRouter = require('../routes/distritos')
const error = require('../middlewares/error')

module.exports = function (app) {
  app.get('/', function (req, res) { res.render('index', { title: 'API database Peru' }) })
  app.use('/api/paises', paisesRouter)
  app.use('/api/regiones', regionesRouter)
  app.use('/api/departamentos', departamentosRouter)
  app.use('/api/provincias', provinciasRouter)
  app.use('/api/distritos', distritosRouter)
  app.get('/api/:wrongword', function (req, res, next) { next(createError('Parametro invalido.')) })
  app.use(error)
}