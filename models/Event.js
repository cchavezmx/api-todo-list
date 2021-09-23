const mongoose = require('mongoose')
const { Schema } = mongoose

const EventSchema = new Schema({
  isActive: {
    type: Boolean,
    default: true,
    required: false
  },
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  date: {
    type: Date, 
    default: Date.now()
  },
  creator: {
    type: String,
    default: true,
    required: false
  },
  responsables: {
    type: Array,
    required: false
  }
}, { timestamps: true })

const Event = mongoose.model('Event', EventSchema)

module.exports = {
  Event
}