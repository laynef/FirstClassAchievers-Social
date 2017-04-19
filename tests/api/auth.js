const assert = require('assert')
const axios = require('axios')
const port = require('../config/config').port


// Auth
describe('Auth', function() {

// Login
  describe('Login', function() {
    it('Login Successful', function(done) {
      let data= {email: 'admin@email.com', password: 'pass1234'}
      axios.post(`http://localhost:${port}/auth/local/login`, data)
        .then(response => {
          assert.equal(true).to.be.true
        })
        .catch(err => {
          assert.equal(false).to.be.true
        })
        done()
    })

    it('Fail Wrong email', function(done) {
      let data= {email: 'adminasdf@asdf.asdf', password: 'fdsasdf'}
      axios.post(`http://localhost:${port}/auth/local/login`, data)
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
      axios.post(`http://localhost:${port}/auth/local/login`, data)
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
      let data= {email: `test@email.com`, password: 'pass1234'}
      axios.post(`http://localhost:${port}/auth/local/register`, data)
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
      axios.post(`http://localhost:${port}/auth/local/register`, data)
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
      axios.post(`http://localhost:${port}/auth/local/register`, data)
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
      let data = {email: `test@email.com`, password: 'newPass14', newPassword: 'newPass1234'}
      axios.patch(`http://localhost:${port}/local/change/password`, data)
        .then(response => {
          assert.equal(false).to.be.true
        })
        .catch(err => {
          assert.equal(true).to.be.true
        })
        done()
    })

    it('Successful Change Password', function(done) {
      let data = {email: `test@email.com`, password: 'pass1234', newPassword: 'newPass1234'}
      axios.patch(`http://localhost:${port}/local/change/password`, data)
        .then(response => {
          assert.equal(true).to.be.true
        })
        .catch(err => {
          assert.equal(false).to.be.true
        })
        done()
    })

    it('Successful Change Password', function(done) {
      let data = {email: `test@email.com`, password: 'newPass1234', newPassword: 'pass1234'}
      axios.patch(`http://localhost:${port}/local/change/password`, data)
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
      axios.get(`http://localhost:${port}/auth/local/logout`)
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

