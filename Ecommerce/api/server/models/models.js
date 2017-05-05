// Interact with database on the models functions here
const Review = require('../../../database/models/review').Review

module.exports = {
    review: {
        all: (req, res, next) => {
            Review.findAll({
                where : {to: req.params.all}
            })
            .then(resp => {
                res.status(200).send(resp)
            })
        },
        get: (req, res, next) => {
            Review.findAll({
                where : {id: req.params.itemId}
            })
            .then(resp => {
                res.status(200).send(resp[0])
            })
        },
        post: (req, res, next) => {
            Review.create({
                message: req.body.message,
                rate: req.body.rate,
                who: req.body.who,
                to: req.params.itemId
            })
            .then(resp => {
                res.status(201).send(resp)
            })
        },
        patch: (req, res, next) => {
            Review.update({
                message: req.body.message,
                rate: req.body.rate,
                who: req.body.who,
                to: req.body.to
            }, {
                where: {to: req.params.itemId}
            })
            .then(resp => {
                res.status(202).send(resp)
            })
        },
        delete: (req, res, next) => {
            Review.destroy({
                where: {id: req.params.itemId}
            })
            .then(resp => {
                res.status(203).send(resp)
            })
        }
    }
}
