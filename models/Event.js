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
    type: Date
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  responsables: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
}, { timestamps: true })

const Event = mongoose.model('Event', EventSchema)

module.exports = {
  Event
}