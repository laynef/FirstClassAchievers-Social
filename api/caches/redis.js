const redis = require('redis');
const client = redis.createClient('redis://localhost');
module.exports = client;
