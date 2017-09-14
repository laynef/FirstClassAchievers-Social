const User = require('../../models/index').User;
const bcrypt = require('bcrypt-nodejs');
const store = require('../caches/store');


module.exports = {
	login: (req, res) => {
		User.findAll({
			where: { email: req.body.email },
		})
			.then((response) => {
				let respond = response[0].dataValues;
				bcrypt.compare(req.body.password, respond.password, (error, result) => {
					if (!result) {
						res.status(404).send('Wrong Password');
					} else {
						store.user = respond;
						let client = respond;
						delete client.password;
						res.status(200).send(client);
					}
				});
			})
			.catch((error) => {
				res.status(404).send('Fetching error ' + error);
			});
	},
	logout: (req, res) => {
		store.user = null;
		res.sendStatus(200);
	},
	changePassword: (req, res) => {
		bcrypt.compare(store.user.password, req.body.newPassword, (error, result) => {
			if (!result) {
				store.user.tries = store.user.tries ? store.user.tries++ : 1;
				res.status(404).send({ tries: store.user.tries });
			} else {
				bcrypt.hash(req.body.newPassword, (complete) => {
					User.update({
						password: complete,
					}, {
						where: { id: store.user.id },
					})
						.then(() => {
							res.sendStatus(200);
						})
						.catch((error) => {
							res.status(404).send('User password did not update ' + error);
						});
				});
			}
		});
	},
	registerVisitor: (req, res) => {
		let salt = bcrypt.genSaltSync(10);
		bcrypt.hash(req.body.password, salt, null, (err, hashed) => {
			User.create({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: hashed,
				permissions: 'visitor',
			})
				.then((response) => {
					store.user = response.dataValues;
					let client = response.dataValues;
					delete client.password;
					res.status(200).send(client);
				})
				.catch((error) => {
					res.status(404).send('User was not created ' + error);
				});
		});
	},
	registerAdmin: (req, res) => {
		let salt = bcrypt.genSaltSync(10);
		bcrypt.hash(req.body.password, salt, null, (error, hashed) => {
			User.create({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: hashed,
				permissions: 'visitor',
			})
				.then((response) => {
					store.user = response.dataValues;
					let client = response.dataValues;
					delete client.password;
					res.status(200).send(client);
				})
				.catch((error) => {
					res.status(404).send('User was not created ' + error);
				});
		});
	},
	registerGuest: (req, res) => {
		let salt = bcrypt.genSaltSync(10);
		bcrypt.hash(req.body.password, salt, null, (error, hashed) => {
			User.create({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: hashed,
				permissions: 'guest',
			})
				.then((response) => {
					store.user = response.dataValues;
					let client = response.dataValues;
					delete client.password;
					res.status(200).send(client);
				})
				.catch((error) => {
					res.status(404).send('User was not created ' + error);
				});
		});
	},
};
