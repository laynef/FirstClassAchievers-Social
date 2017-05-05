// Interact with database on the models functions here
const Review = require('../../../database/models/index').Review
const CreditCard = require('../../../database/models/index').CreditCard

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
                to: req.params.itemId
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
    },
    creditCard: {
        all: (req, res, next) => {
            Profile.findAll({
                where : {to: req.params.all}
            })
            .then(resp => {
                res.status(200).send(resp)
            })
        },
        get: (req, res, next) => {
            CreditCard.findAll({
                where : {id: req.params.itemId}
            })
            .then(resp => {
                res.status(200).send(resp[0])
            })
        },
        post: (req, res, next) => {
            CreditCard.create({
                card_number: req.body.card_number,
                card_type: req.body.card_type,
                users_name: req.body.users_name,
                expire_month: req.body.expire_month,
                expire_year: req.body.expire_year,
                cvc:req.body.cvc,
                profile_id: req.body.profile_id
            })
            .then(resp => {
                res.status(201).send(resp)
            })
        },
        patch: (req, res, next) => {
            CreditCard.update({
                card_number: req.body.card_number,
                card_type: req.body.card_type,
                users_name: req.body.users_name,
                expire_month: req.body.expire_month,
                expire_year: req.body.expire_year,
                cvc:req.body.cvc,
                profile_id: req.body.profile_id
            }, {
                where: {id: req.params.itemId}
            })
            .then(resp => {
                res.status(202).send(resp)
            })
        },
        delete: (req, res, next) => {
            CreditCard.destroy({
                where: {id: req.params.itemId}
            })
            .then(resp => {
                res.status(203).send(resp)
            })
        }
    },
    product: {
        individual: {
            get: (req, res, next) => {
                Product.findAll({
                    where: {id: req.params.itemId}
                })
                .then(resp => {
                    res.status(200).send(resp[0])
                })
            },
            post: (req, res, next) => {
                Product.create({
                    
                })
                .then(resp => {
                    res.status(201).send(resp)
                })
            },
            patch: (req, res, next) => {
                Product.update({
                    
                }, {
                    where: {}
                })
                .then(resp => {
                    res.status(202).send(resp)
                })
            },
            delete: (req, res, next) => {
                Product.destroy({
                    where: {id: req.params.itemId}
                })
                .then(resp => {
                    res.status(203).send(resp)
                })
            }
        },
        category: {
            get: (req, res, next) => {
                Product.findAll({
                    where : {to: req.params.all}
                })
                .then(resp => {
                    res.status(200).send(resp)
                })
            }
        }
    },
    order: {
        all: (req, res, next) => {
            Order.findAll({
                where : {to: req.params.all}
            })
            .then(resp => {
                res.status(200).send(resp)
            })
        },
        get: (req, res, next) => {
            Order.findAll({
                where : {id: req.params.itemId}
            })
            .then(resp => {
                res.status(200).send(resp[0])
            })
        },
        post: (req, res, next) => {
            Order.create({
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
            Order.update({
                message: req.body.message,
                rate: req.body.rate,
                who: req.body.who,
                to: req.params.itemId
            }, {
                where: {to: req.params.itemId}
            })
            .then(resp => {
                res.status(202).send(resp)
            })
        },
        delete: (req, res, next) => {
            Order.destroy({
                where: {id: req.params.itemId}
            })
            .then(resp => {
                res.status(203).send(resp)
            })
        }
    },
    favorites: {
        list: {
            get: (req, res, next) => {
                Favorites.findAll({
                    where : {to: req.params.all}
                })
                .then(resp => {
                    res.status(200).send(resp)
                })
            },
            post: (req, res, next) => {

            },
            patch: (req, res, next) => {

            },
            delete: (req, res, next) => {
                Favorites.destroy({
                    where: {id: req.params.itemId}
                })
                .then(resp => {
                    res.status(203).send(resp)
                })
            }
        },
        individual: {
            get: (req, res, next) => {
                Favorites.findAll({
                    where : {to: req.params.all}
                })
                .then(resp => {
                    res.status(200).send(resp[0])
                })
            },
            post: (req, res, next) => {

            },
            patch: (req, res, next) => {

            },
            delete: (req, res, next) => {
                Favorites.destroy({
                    where: {id: req.params.itemId}
                })
                .then(resp => {
                    res.status(203).send(resp)
                })
            }
        }
    },
    notify: {
        get: (req, res, next) => {
            Noification.findAll({
                where : {user_id: req.params.all}
            })
            .then(resp => {
                res.status(200).send(resp[0])
            })
        },
        post: (req, res, next) => {

        },
        patch: (req, res, next) => {

        }
    },
    profile: {
        get: (req, res, next) => {
            Profile.findAll({
                where : {id: req.params.itemId}
            })
            .then(resp => {
                res.status(200).send(resp[0])
            })
        },
        post: (req, res, next) => {

        },
        patch: (req, res, next) => {

        }
    }

}
