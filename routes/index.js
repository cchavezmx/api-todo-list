const express = require('express')
const router = express.Router()


router.use(require('./todoListRoutes'))


module.exports = router