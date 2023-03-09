const db = require('../config/db/index')

const Category = category => {
    this.idCategory = category.idCategory
    this.title = category.title
}

Category.getAll = result => {
    db.query('select * from category' , (err, category) => {
        if(err){
            result(err)
        }else{
            result(category)
        }
    })
}

Category.getById = (id, result) => {
    db.query(`select * from category where idCategory = ${id}`, (err,category) => {
        if(err || category.length == 0){
            result(err)
        }else{
            result(category[0])
        }
    })
}

Category.add = (data, result) => {
    db.query('insert into category set ?', data, (err, category) => {
        if(err){
            result(err)
        }else{
            result({idCategory: category.insertID, ...data})
        }
    })
}

Category.delete = (id, result) => {
    db.query(`delete from category where idCategory = ${id}`, (err, category) => {
        if(err){
            result(err)
        }else{
            result('delete success category idCategory' + id)
        }
    })
}

Category.update = (data, result) => {
    db.query('update category set title = ? where idCategory = ?', [data.title, data.id], (err, category) => {
        if(err){
            result(err)
        }else{
            result(data)
        }
    })
}

module.exports = Category