const Product  =require('../model/product.model')

exports.getAll = (req, res) => {
    Product.getAll(data => {
        res.send(data)
    })
}

exports.getById = (req, res) => {
    Product.getById(req.params.id, result => {
        res.send(result)
    })
}

exports.add = (req, res) => {
    Product.add(req.body, result => {
        res.send(result)
    })
}

exports.delete = (req, res) => {
    Product.delete(req.params.id, result => {
        res.send(result)
    })
}

exports.update = (req, res) => {
    Product.update(req.body, result => {
        res.send(result)
    })
}