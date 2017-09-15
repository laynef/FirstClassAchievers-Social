const crypto = require('crypto');


module.exports = {
	hash: (str, cb) => {
		const hash = crypto.createHmac('sha256', 'secret');
		hash.update(str);
		cb(hash.digest('hex'));
	},
	verify: (compare, str, cb) => {
		const hash = crypto.createHmac('sha256', 'secret');
		hash.update(str);
		cb(hash.digest('hex') === compare);
	},
};
