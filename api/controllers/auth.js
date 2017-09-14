const User = require('../../models/index').User;
const Profile = require('../../models/index').Profile;
const Following = require('../../models/index').Following;
const Favorite = require('../../models/index').Favorite;
const bcrypt = require('bcrypt-nodejs');
let client = require('../caches/redis');


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
						client.set(`user_${respond.id}`, JSON.stringify(respond));
						client.set(`session_${req.session.id}`, JSON.stringify(respond));
						let returns = respond;
						delete returns.password;
						res.status(200).send(returns);
					}
				});
			})
			.catch((error) => {
				res.status(404).send('Fetching error ' + error);
			});
	},
	logout: (req, res) => {
		client.set(`session_${req.session.id}`, 'null');
		res.sendStatus(200);
	},
	changePassword: (req, res) => {
		let cachedObject = JSON.parse(client.get(`user_${req.params.userId}`));
		bcrypt.compare(cachedObject.password, req.body.newPassword, (error, result) => {
			if (!result) {
				cachedObject.tries = cachedObject.tries ? cachedObject.tries++ : 1;
				client.set(`user_${req.params.userId}`, JSON.stringify(cachedObject));
				res.status(404).send({ tries: cachedObject.tries });
			} else {
				bcrypt.hash(req.body.newPassword, (complete) => {
					User.update({
						password: complete,
					}, {
						where: { id: cachedObject.id },
					})
						.then(() => {
							cachedObject.password = complete;
							client.set(`user_${req.params.userId}`, JSON.stringify(cachedObject));
							client.set(`session_${req.session.id}`, JSON.stringify(cachedObject));
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
				email: req.body.email,
				password: hashed,
				image: req.body.image,
				permissions: 'visitor',
			})
				.then((response) => {
					Following.create({
						followers: [],
						user_id: response.dataValues.id,
					});
					Favorite.create({
						user_id: response.dataValues.id,
						entries: [],
					});
					Profile.create({
						firstName: req.body.firstName|| null,
						lastName: req.body.lastName || null,
						city: null,
						goals: null,
						position: null,
						nickname: null,
						image: req.body.image || null,
						zipCode: null,
						state: null,
						country: null,
						user_id: response.dataValues.id,
					});
					let returns = response.dataValues;
					client.set(`user_${returns.id}`, JSON.stringify(returns));
					client.set(`session_${req.session.id}`, JSON.stringify(returns));
					delete returns.password;
					res.status(200).send(returns);
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
				email: req.body.email,
				password: hashed,
				image: req.body.image,
				permissions: 'visitor',
			})
				.then((response) => {
					Following.create({
						followers: [],
						user_id: response.dataValues.id,
					});
					Favorite.create({
						user_id: response.dataValues.id,
						entries: [],
					});
					Profile.create({
						firstName: req.body.firstName|| null,
						lastName: req.body.lastName || null,
						city: null,
						goals: null,
						position: null,
						nickname: null,
						image: req.body.image || null,
						zipCode: null,
						state: null,
						country: null,
						user_id: response.dataValues.id,
					});
					let returns = response.dataValues;
					client.set(`user_${returns.id}`, JSON.stringify(returns));
					client.set(`session_${req.session.id}`, JSON.stringify(returns));
					delete returns.password;
					res.status(200).send(returns);
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
				email: req.body.email,
				password: hashed,
				image: req.body.image,
				permissions: 'guest',
			})
				.then((response) => {
					Following.create({
						followers: [],
						user_id: response.dataValues.id,
					});
					Favorite.create({
						user_id: response.dataValues.id,
						entries: [],
					});
					Profile.create({
						firstName: req.body.firstName|| null,
						lastName: req.body.lastName || null,
						city: null,
						goals: null,
						position: null,
						nickname: null,
						image: req.body.image || null,
						zipCode: null,
						state: null,
						country: null,
						user_id: response.dataValues.id,
					});
					let returns = response.dataValues;
					client.set(`user_${returns.id}`, JSON.stringify(returns));
					client.set(`session_${req.session.id}`, JSON.stringify(returns));
					delete returns.password;
					res.status(200).send(returns);
				})
				.catch((error) => {
					res.status(404).send('User was not created ' + error);
				});
		});
	},
	refresh: (req, res) => {
		client.get(`session_${req.session.id}`, (error, reply) => {
			res.status(200).send(JSON.parse(reply));
		});
	},
};
