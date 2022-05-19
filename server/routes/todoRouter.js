const router = require('express').Router();
const { Todo } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { name, title, email } = req.body
    await Todo.create({
      name,
      title,
      email
    })
    res.send('File uploaded!');

  })

router.route('/')
  .get(async (req, res) => {
    const todo = await Todo.findAll({
      order: [
        ['id', 'DESC']]
    })
    res.json(todo)
  })
router.route('/changeStatus/:id')
  .post(async (req, res) => {
    const { id } = req.params
    const { status } = req.body
    if (req.session.user) {
      await Todo.update({ status }, {
        where: {
          id
        }
      })
      res.json(200)
    }
    else {

      res.send(300)
    }
  })

router.route('/edit')
  .put(async (req, res) => {
    const { name, email, title, id, changed } = req.body
    if (req.session.user) {
      const todo = await Todo.update({ name, email, title, changed }, {
        where: {
          id
        }
      })
      res.send(200)
    }
    else {
      res.send(300)

    }
  })

module.exports = router
