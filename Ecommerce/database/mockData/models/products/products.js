const axios = require('axios')
const Product = require('../../../models/index').Product


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

let products = [
    {
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
    }
]

products.map(e => {
    axios.post(`http://localhost:3215/api/product/single/`, e)
        .then(resp => console.log(`SUCCESS`))
        .catch(err => console.log(`ERROR`))
})
