const { Event, User } = require('../models')
const { Types } = require('mongoose')

module.exports = {
  insertEvent: (body) => new Event(body).save(),
  getAllEvents: () => Event.aggregate().match({ isActive: true }),
  getEventUserID: async(userID) => {
    return await Event
    .aggregate()
    .match({ creator: Types.ObjectId(userID) })
    .match({ isActive: true })
    .sort({ date: -1})
  },
  sharetask: async(userID) => {
    return await Event
    .aggregate()
    .match({ responsables: Types.ObjectId(userID) })
    .match({ isActive: true })
    .sort({ date: -1})
  },
  eventosTerminados: async(userID) => {
    return await Event
    .aggregate()
    .match({ creator: Types.ObjectId(userID) })
    .match({ isActive: false })
    .sort({ date: -1})
  },
  allusers: async () => {
    return User.find({ isActive: true })
  },
  updateNota: async(notaid, body ) => {
    return await Event.findByIdAndUpdate(notaid, body)
  },
  getoneuser: async (userid) => {
    const agg = [
      {
        '$match': {
          '_id': Types.ObjectId(userid)
        }
      }, {
        '$project': {
          'name': 1
        }
      }
    ];
    return await User.aggregate(agg)
  }
}