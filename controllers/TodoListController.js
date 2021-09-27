const  { TodoListService } = require('../services')

module.exports = {

  insertEvent: async({ body }, res) => {

    try {
      const event = await TodoListService.insertEvent(body)

      return res.status(200).json({ message: event })
    } catch (error) {
      return res.status(400).json({ error })
    }

  },
  getAllEvents: async(req, res) => {
    try {
      const allevents = await TodoListService.getAllEvents()      
      return res.status(200).json({ message: allevents })

    } catch (error) {
      return res.status(400).json({ error })
    }
  },
  getEventUserID: async(req, res) => {
    const { userID } = req.params

    try {
      const events = await TodoListService.getEventUserID(userID)
      return res.status(200).json({ message: events })

    } catch (error) {
      return res.status(400).json({ error })
    }
  },
  eventosTerminados: async(req, res) => {
    const { userID } = req.params

    try {
      const events = await TodoListService.eventosTerminados(userID)
      return res.status(200).json({ message: events })

    } catch (error) {
      return res.status(400).json({ error })
    }
  },
  sharetask: async(req, res) => {
    const { userID } = req.params

    try {
      const events = await TodoListService.sharetask(userID)
      return res.status(200).json({ message: events })

    } catch (error) {
      return res.status(400).json({ error })
    }
  },
  allusers: async(req, res) => {
    
    try {
      const users = await TodoListService.allusers()
      return res.status(200).json({ message: users })

    } catch (error) {
      return res.status(400).json({ error })
    }
  },
  updateNota: async(req, res) => {

    const { notaId } = req.params

    try {
      const nota = await TodoListService.updateNota(notaId, req.body)
      return res.status(200).json({ message: nota })

    } catch (error) {
      return res.status(400).json({ error })
    }
  },
  cancelarEvento: async(req, res) => {
    
    const { notaId } = req.params
    const body = { isActive: false }

    try {
      const nota = await TodoListService.updateNota(notaId, body)
      return res.status(200).json({ message: nota })

    } catch (error) {
      return res.status(400).json({ error })
    }
  },
  getoneuser: async(req, res) => {
    const { userID } = req.params

    try {
      const user = await TodoListService.getoneuser(userID)
      return res.status(200).json({ message: user })

    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}