const { Event } = require('../models')

module.exports = {
  insertEvent: (body) => new Event(body).save()
}