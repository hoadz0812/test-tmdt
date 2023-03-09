const router = require('express').Router()
const productController = require('../controller/product.controller')

router.get('/list' , productController.getAll)
router.get('/:id', productController.getById)
router.post('/add', productController.add)
router.delete('/delete/:id', productController.delete)
router.put('/update', productController.update)

module.exports = router