const express = require('express')
const router = express.Router()

const { TodoListController } = require('../controllers')

// crear tarea dia 
router.post('/api/v1/insert/event', TodoListController.insertEvent)

// todas las tareas
router.get('/api/v1/allevents', TodoListController.getAllEvents)

// todas las tareas por usuario 
router.get('/api/v1/events/:userID', TodoListController.getEventUserID)

// todas las tareas terminadas por usuario 
router.get('/api/v1/eventsterminados/:userID', TodoListController.eventosTerminados)

// get events responsable
router.get('/api/v1/sharetask/:userID', TodoListController.sharetask)

// todos los usuario para asignacion
router.get('/api/v1/alluser/', TodoListController.allusers)

// modificar evento
router.patch('/api/v1/updatenota/:notaId', TodoListController.updateNota)

// cancelar evento
router.patch('/api/v1/cancelarevento/:notaId', TodoListController.cancelarEvento)

// get user por id 
router.get('/api/v1/getoneuser/:userID', TodoListController.getoneuser)

module.exports = router