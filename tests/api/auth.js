const assert = require('assert')
const axios = require('axios')
const _ = require('lodash')

let count = 0
// Auth
describe('Auth', function() {
  count++ // constantly changing

// Login
  describe('Login', function() {
    it('Login Successful', function(done) {
      let data= {email: 'admin@email.com', password: 'pass1234'}
      axios.post(`http://localhost:3232/auth/local/login`, data)
        .then(response => {
          assert.equal(true).to.be.true
        })
        .catch(err => {
          assert.equal(false).to.be.true
        })
        done()
    })

    it('Fail Wrong password', function(done) {
      let data= {email: 'wrong@emasdfs.@#(*DF', password: 'pass1234'}
      axios.post(`http://localhost:3232/auth/local/login`, data)
        .then(response => {
          assert.equal(false).to.be.true
        })
        .catch(err => {
          assert.equal(true).to.be.true
        })
        done()
    })

    it('Fail Wrong password', function(done) {
      let data= {email: 'admin@email.com', password: 'wrong'}
      axios.post(`http://localhost:3232/auth/local/login`, data)
        .then(response => {
          assert.equal(false).to.be.true
        })
        .catch(err => {
          assert.equal(true).to.be.true
        })
        done()
    })
  })


// Register
  describe('Register', function() {
    it('Register Successful', function(done) {
      let data= {email: `email${count}@email.com`, password: 'pass1234'}
      axios.post(`http://localhost:3232/auth/local/register`, data)
        .then(response => {
          assert.equal(true).to.be.true
        })
        .catch(err => {
          assert.equal(false).to.be.true
        })
        done()
    })

    it('No email', function(done) {
      let data ={email: '', password:'pass1234'}
      axios.post(`http://localhost:3232/auth/local/register`, data)
        .then(response => {
          assert.equal(false).to.be.true
        })
        .catch(err => {
          assert.equal(true).to.be.true
        })
        done()
    })   
    
    it('No password', function(done) {
      let data ={email: '', password:'pass1234'}
      axios.post(`http://localhost:3232/auth/local/register`, data)
        .then(response => {
          assert.equal(false).to.be.true
        })
        .catch(err => {
          assert.equal(true).to.be.true
        })
        done()
    })
  })

// Change Password
  // describe('#indexOf()', function() {
  //   it('should return -1 when the value is not present', function(done) {
  //     assert.equal(-1, [1,2,3].indexOf(4))
  //   })

  //   it('should return -1 when the value is not present', function(done) {
  //     assert.equal(-1, [1,2,3].indexOf(4))
  //   })
  // })

// Logout
  describe('Logout Success', function() {
    it('should return true', function(done) {
      axios.get(`http://localhost:3232/auth/local/logout`)
        .then(response => {
          assert.equal(true).to.be.true
        })
        .catch(err => {
          assert.equal(false).to.be.true
        })
        done()
    })
  })
})

