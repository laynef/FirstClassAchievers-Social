const redis = require('redis');
// const client = redis.createClient(process.env.REDIS_PORT);
const client = redis.createClient('redis://redis-12339.c10.us-east-1-4.ec2.cloud.redislabs.com:12339');

module.exports = client;
