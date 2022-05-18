const router = require('express').Router();
const { Todo } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    console.log(req.body);
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
    console.log(status);

    await Todo.update({ status }, {
      where: {
        id
      }
    })
    res.json(200)
  })

router.route('/edit')
  .put(async (req, res) => {
    const { name, email, title, id } = req.body
    await Todo.update({ name, email, title, changed: true }, {
      where: {
        id
      }
    });
    res.send(200)
  })

module.exports = router
