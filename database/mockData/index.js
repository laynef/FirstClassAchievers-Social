let promise = new Promise(resolve =>{ 
    setTimeout(() => resolve(), 1000)
})

promise.then(resp => {
    require('./models/user')
})
