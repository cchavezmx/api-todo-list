const express = require('express')
const router = express.Router()

const { TodoListController } = require('../controllers')

// crear tarea dia 
router.post('/api/v1/insert/event', TodoListController.insertEvent)


module.exports = router