const db = require('../config/db/index')

const Product = product => {
    this.idProduct = product.idProduct
    this.idCategory = product.idCategory
    this.nameProduct = product.nameProduct
    this.price = product.price
    this.description = product.description
    this.type = product.type
    this.status = product.status
    this.total = product.total
    this.img = product.img
}

Product.getAll = result => {
    db.query('select * from product, category where product.idCategory = category.idCategory ORDER by idProduct ASC', (err, product) => {
        if(err){
            result(err)
        }else{
            result(product)
        }
    })
}

Product.getById = (id, result) => {
    db.query(`select * from product where idProduct = ${id}`, (err, product) => {
        if(err || product.length == 0){
            result(err)
        }else{
            result(product[0])
        }
    })
}

Product.add = (data, result) => {
    db.query('insert into product set ?', data, (err, product) => {
        if(err){
            result(err)
        }else{
            result({idProduct: product.insertID, ...data})
        }
    })
}

Product.delete = (id, result) => {
    db.query(`delete from product where idProduct = ${id}`, (err, product) => {
        if(err){
            result(err)
        }else{
            result('Delete seccess product ' + id)
        }
    })
}

Product.update = (data, result) => {
    db.query('update product set idCategory = ?, nameProduct = ?, price = ?, description = ?, type = ?, status = ?, total = ?, img = ? where idProduct = ?',
    [data.idCategory, data.nameProduct, data.price, data.description , data.type, data.status, data.total, data.img, data.idProduct], (err, product) => {
        if(err){
            result(err)
        }else{
            result(data)
        }
    })
}

Product.search = (id, result) => {
    db.query(`SELECT * FROM product WHERE nameProduct like N'%${id}%'`, (err, product) => {
        if(err){
            result(err)
        }else{
            result(product)
        }
    })
}

module.exports = Product