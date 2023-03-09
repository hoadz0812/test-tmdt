const router = require('express').Router()
const categoryController = require('../controller/category.controller')

router.get('/list' , categoryController.getAll)
router.get('/:id', categoryController.getById)
router.post('/add', categoryController.add)
router.delete('/delete/:id', categoryController.delete)
router.put('/update', categoryController.update)

module.exports = router