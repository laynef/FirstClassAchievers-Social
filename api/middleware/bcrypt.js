const crypto = require('crypto');
const config = require('../../config/config');


module.exports = {
	hash: (str, cb) => {
		const hash = crypto.createHmac('sha256', config.webSecret);
		hash.update(str);
		cb(hash.digest('hex'));
	},
	verify: (compare, str, cb) => {
		const hash = crypto.createHmac('sha256', config.webSecret);
		hash.update(str);
		cb(hash.digest('hex') === compare);
	},
};
