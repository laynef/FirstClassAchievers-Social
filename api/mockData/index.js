let promise = new Promise(resolve =>{ 
    setTimeout(() => resolve(), 250)
})

require('./models/user')
