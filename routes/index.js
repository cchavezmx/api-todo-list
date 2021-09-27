const express = require('express')
const router = express.Router()


router.use(require('./todoListRoutes'))
router.use(require('./UserRoutes'))


module.exports = router