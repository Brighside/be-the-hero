const express = require('express')
const routes  = express.Router()
const OngController = require('./controllers/ongController')
const incidentsController = require('./controllers/incidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.get('/profile', ProfileController.index)
routes.get('/ongs', OngController.index)
routes.get('/incidents', incidentsController.index)

routes.post('/ongs', OngController.create)
routes.post('/incidents', incidentsController.create)
routes.post('/sessions', SessionController.create)

routes.delete('/incidents/:id', incidentsController.delete)
module.exports = routes