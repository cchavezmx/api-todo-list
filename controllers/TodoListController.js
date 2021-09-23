const  { TodoListService } = require('../services')

module.exports = {

  insertEvent: async({ body }, res) => {

    try {
      const event = await TodoListService.insertEvent(body)
      console.log(res)

      return res.status(200).json({ message: event })
    } catch (error) {
      return res.status(400).json({ error })
    }

  }
}