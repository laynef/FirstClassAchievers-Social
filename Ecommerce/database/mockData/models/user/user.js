const axios = require('axios')
const User = require('../../../models/index').User


axios.post(`http://localhost:3215/auth/local/register`, 
{
    email: `admin@email.com`,
    password: `pass1234`
})

axios.post(`http://localhost:3215/auth/local/register`, 
{
    email: `company@email.com`,
    password: `pass1234`
})

axios.post(`http://localhost:3215/auth/local/register`, 
{
    email: `user@email.com`,
    password: `pass1234`
})

