// Interact with database on the models functions here
const Review = require('../../../database/models/index').Review
const CreditCard = require('../../../database/models/index').CreditCard
const Notification = require('../../../database/models/index').Notification
const User = require('../../../database/models/index').User
const Profile = require('../../../database/models/index').Profile
const Product = require('../../../database/models/index').Product
const Order = require('../../../database/models/index').Order
const Favorites = require('../../../database/models/index').Favorites
const Coupon = require('../../../database/models/index').Coupon

let keys = {
    categories: {
        0: 'HAT',
        1: 'T_SHIRT',
        2: 'LONG_SLEEVE',
        3: 'JACKET',
        4: 'COAT',
        5: 'DRESS',
        6: 'PANTS',
        7: 'SKIRT',
        8: 'UNDERWEAR',
        9: 'SOCKS',
        10: 'TANK_TOP',
        11: 'BLOUSE',
        12: 'SHORTS'
    },
    age: {
        0: 'ADULT',
        1: 'YOUTH'
    },
    gender: {
        0: 'FEMALE',
        1: 'MALE'
    }
}

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
                    name: req.body.name,
                    price: req.body.price,
                    quantity: req.body.quantity,
                    description: req.body.description,
                    sizes: req.body.sizes,
                    details: req.body.details,
                    images: req.body.images,
                    colors: req.body.colors,
                    categories: req.body.categories,
                    gender: req.body.gender,
                    age: req.body.age,
                    quality: req.body.quality
                })
                .then(resp => {
                    res.status(201).send(resp)
                })
            },
            patch: (req, res, next) => {
                Product.update({
                    name: req.body.name,
                    price: req.body.price,
                    quantity: req.body.quantity,
                    description: req.body.description,
                    sizes: req.body.sizes,
                    details: req.body.details,
                    images: req.body.images,
                    colors: req.body.colors,
                    categories: req.body.categories,
                    gender: req.body.gender,
                    age: req.body.age,
                    quality: req.body.quality
                }, {
                    where: {id: req.params.itemId}
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
                    where : {id: req.params.itemId}
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
                who: req.body.who
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
                    where : {user_id: req.params.itemId}
                })
                .then(resp => {
                    res.status(200).send(resp)
                })
            },
            post: (req, res, next) => {
                Favorites.create({
                    products: req.body.products,
                    title: req.body.title,
                    user_id: req.body.user_id
                })
                .then(resp => {
                    res.status(201).send(resp)
                })
            },
            patch: (req, res, next) => {
                Favorites.update({
                    products: req.body.products,
                    title: req.body.title,
                    user_id: req.body.user_id
                }, {
                    where : {user_id: req.params.itemId}
                })
                .then(resp => {
                    res.status(202).send(resp)
                })
            },
            delete: (req, res, next) => {
                Favorites.destroy({
                    where: {user_id: req.params.itemId}
                })
                .then(resp => {
                    res.status(203).send(resp)
                })
            }
        },
        individual: {
            get: (req, res, next) => {
                Favorites.findAll({
                    where : {id: req.params.itemId}
                })
                .then(resp => {
                    res.status(200).send(resp[0])
                })
            },
            post: (req, res, next) => {
                Favorites.create({
                    products: req.body.products,
                    title: req.body.title,
                    user_id: req.body.user_id
                })
                .then(resp => {
                    res.status(201).send(resp)
                })
            },
            patch: (req, res, next) => {
                Favorites.update({
                    products: req.body.products,
                    title: req.body.title,
                    user_id: req.body.user_id
                }, {
                    where : {id: req.params.itemId}
                })
                .then(resp => {
                    res.status(202).send(resp)
                })
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
                where : {user_id: req.params.itemId}
            })
            .then(resp => {
                res.status(200).send(resp[0])
            })
        },
        patch: (req, res, next) => {
            Noification.update({
                seen: true
            }, {
                where : {id: req.params.itemId}
            })
            .then(resp => {
                res.status(202).send(resp[0])
            })
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
        patch: (req, res, next) => {
            Profile.update({
                billing_street: req.body.billing_street,
                billing_city: req.body.billing_city,
                billing_zip: req.body.billing_zip,
                billing_country: req.body.billing_country,
                shipping_street: req.body.shipping_street,
                shipping_city: req.body.shipping_city,
                shipping_zip: req.body.shipping_zip,
                shipping_country: req.body.shipping_country,
                credit_cards: req.body.credit_cards,
                phone: req.body.phone,
                image: req.body.image,
                name: req.body.name
            }, {
                where: {user_id: req.params.itemId}
            })
            .then(resp => {
                res.status(202).send(resp[0])
            })
        }
    }

}
