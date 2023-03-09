const Category = require('../model/category.model')

exports.getAll = (req, res) => {
    Category.getAll(data => {
        res.send(data)
    })
}

exports.getById = (req, res) => {
    Category.getById(req.params.id, result => {
        res.send(result)
    })
}

exports.add = (req, res) => {
    console.log(req.body);
    Category.add(req.body, result => {
        res.send(result)
    })
}

exports.delete = (req, res) => {
    Category.delete(req.params.id, result => {
        res.send(result)
    })
}

exports.update = (req, res) => {
    Category.update(req.body, result => {
        res.send(result)
    })
}