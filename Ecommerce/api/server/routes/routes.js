// calling controller functions when routes are hit
const router = require('express').Router()
const controllers = require('../models/models')

// api/ server roots

// review
router.get('/review/:all', controllers.review.all)
router.get('/review/:itemId', controllers.review.get)
router.post('/review/:itemId', controllers.review.post)
router.patch('/review/:itemId', controllers.review.patch)
router.delete('/review/:itemId', controllers.review.delete)

// credit card
router.get('/credit/card/:all', controllers.creditCard.all)
router.get('/credit/card/:itemId', controllers.creditCard.get)
router.post('/credit/card/:itemId', controllers.creditCard.post)
router.patch('/credit/card/:itemId', controllers.creditCard.patch)
router.delete('/credit/card/:itemId', controllers.creditCard.delete)

// indiviual product
router.get('/product/:itemId', controllers.product.individual.get)
router.post('/product/:itemId', controllers.product.individual.post)
router.patch('/product/:itemId', controllers.product.individual.patch)
router.delete('/product/:itemId', controllers.product.individual.delete)

// category product
router.get('/product/:itemId', controllers.product.category.get)

// order
router.get('/order/:all', controllers.order.all)
router.get('/order/:itemId', controllers.order.get)
router.post('/order/:itemId', controllers.order.post)
router.patch('/order/:itemId', controllers.order.patch)
router.delete('/order/:itemId', controllers.order.delete)

// favorites
router.get('/favorites/:itemId', controllers.favorites.list.get)
router.post('/favorites/:itemId', controllers.favorites.list.post)
router.patch('/favorites/:itemId', controllers.favorites.list.patch)
router.delete('/favorites/:itemId', controllers.favorites.list.delete)

// individual favorites
router.get('/favorites/:itemId', controllers.favorites.individual.get)
router.post('/favorites/:itemId', controllers.favorites.individual.post)
router.patch('/favorites/:itemId', controllers.favorites.individual.patch)
router.delete('/favorites/:itemId', controllers.favorites.individual.delete)

// notify
router.get('/notify', controllers.notify.get)
router.post('/notify', controllers.notify.post)
router.patch('/notify', controllers.notify.patch)

// profile
router.get('/profile/:itemId', controllers.profile.get)
router.post('/profile/:itemId', controllers.profile.post)
router.patch('/profile/:itemId', controllers.profile.patch)

// coupon
// router.get('/coupon', controllers.coupon.get)
// router.post('/coupon', controllers.coupon.post)
// router.patch('/coupon', controllers.coupon.patch)




// export router for server.js
module.exports = router