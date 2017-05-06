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
    // {
    //     name: req.body.name,  // STRING
    //     price: req.body.price, // DOUBLE
    //     quantity: req.body.quantity, // STRING
    //     description: req.body.description, // TEXT
    //     sizes: req.body.sizes, // ARRAY
    //     details: req.body.details, // TEXT
    //     images: req.body.images, // ARRAY
    //     colors: req.body.colors, // ARRAY
    //     categories: req.body.categories,
    //     gender: req.body.gender, // STRING
    //     age: req.body.age, // STRING
    //     quality: req.body.quality // STRING
    // }
]

products.map(e => {
    axios.post(`http://localhost:3215/api/product/single/`, e)
        .then(resp => console.log(`SUCCESS`))
        .catch(err => console.log(`ERROR`))
})
