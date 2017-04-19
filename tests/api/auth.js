const assert = require('assert')
const axios = require('axios')
const _ = require('lodash')


let count = new Date.now()
count = count.replace(/[^0-9.]/g, '')

// Auth
describe('Auth', function() {

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
  describe('Successful Change Password', function() {
    it('Failed', function(done) {
      let data = {email: `email${count}@email.com`, password: 'newPass14', newPassword: 'newPass1234'}
      axios.patch(`http://localhost:3232/local/change/password`, data)
        .then(response => {
          assert.equal(false).to.be.true
        })
        .catch(err => {
          assert.equal(true).to.be.true
        })
        done()
    })

    it('Successful Change Password', function(done) {
      let data = {email: `email${count}@email.com`, password: 'pass1234', newPassword: 'newPass1234'}
      axios.patch(`http://localhost:3232/local/change/password`, data)
        .then(response => {
          assert.equal(true).to.be.true
        })
        .catch(err => {
          assert.equal(false).to.be.true
        })
        done()
    })

    it('Successful Change Password', function(done) {
      let data = {email: `email${count}@email.com`, password: 'newPass1234', newPassword: 'pass1234'}
      axios.patch(`http://localhost:3232/local/change/password`, data)
        .then(response => {
          assert.equal(true).to.be.true
        })
        .catch(err => {
          assert.equal(false).to.be.true
        })
        done()
    })
  })

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

