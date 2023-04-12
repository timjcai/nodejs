const express = require('express')
const todoController = require('../controllers/todoController')
const router = express.Router()

router.get('/', todoController.todo_index)
router.post('/', todoController.todo_create_post)

module.exports = router
