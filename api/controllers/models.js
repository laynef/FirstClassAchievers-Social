// Interact with database on the models functions here
const Profile = require('../../models/index').Profile;
const Testimonial = require('../../models/index').Testimonial;
const Following = require('../../models/index').Following;
const Favorite = require('../../models/index').Favorite;
const User = require('../../models/index').User;
const Message = require('../../models/index').Message;
const Notification = require('../../models/index').Notification;
const Comment = require('../../models/index').Comment;
const _ = require('lodash');
const cloudinary = require('cloudinary');
const client = require('../caches/redis');
const config = require('../../config/config');


cloudinary.config({
	cloud_name: process.env.cloud_name || config.cloud_name,
	api_key: process.env.cloud_api_key || config.cloud_api_key,
	api_secret: process.env.cloud_api_secret || config.cloud_api_secret,
});

module.exports = {
	profile: {
		get: (req, res) => {
			client.get(`profile_${req.params.userId}`, (err, reply) => {
				let replies = JSON.parse(reply);
				if (replies === null || err) {
					Profile.findAll({
						where: { user_id: req.params.userId },
					})
						.then(response => {
							client.set(`profile_${req.params.userId}`, JSON.stringify(response[0].dataValues));
							res.status(201).send(response[0].dataValues ? response[0].dataValues : []);
						}).catch(() => {
							res.sendStatus(401);
						});
				} else {
					res.status(200).send(replies);
				}
			});
		},
		patch: (req, res) => {
			Profile.update({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				city: req.body.city,
				goals: req.body.goals,
				position: req.body.position,
				nickname: req.body.nickname,
				image: req.body.image,
				zipCode: req.body.zipCode,
				state: req.body.state,
				country: req.body.country,
			}, {
				where: { user_id: req.params.userId },
			})
				.then(() => {
					client.get(`profile_${req.params.userId}`, (err, reply) => {
						let replies = JSON.parse(reply);
						replies.firstName = req.body.firstName;
						replies.lastName = req.body.lastName;
						replies.city = req.body.city;
						replies.goals = req.body.goals;
						replies.position = req.body.position;
						replies.nickname = req.body.nickname;
						replies.image = req.body.image;
						replies.zipCode = req.body.zipCode;
						replies.state = req.body.state;
						replies.country = req.body.country;
						client.set(`profile_${req.params.userId}`, JSON.stringify(replies));
						res.status(202).send(replies);
					});
				});
		},
	},
	testify: {
		get: (req, res) => {
			client.get(`testimonials`, (err, reply) => {
				let replies = JSON.parse(reply);
				Testimonial.findAll({
					offset: replies !== null ? _.size(replies) : 0,
				})
					.then(response => {
						let data = {};
						response.forEach(e => {
							data[e.id] = e.dataValues;
						});
						replies = replies === null ? {} : replies;
						let all = _.extend(replies, data);
						client.set(`testimonials`, JSON.stringify(all));
						res.status(200).send(Object.values(all));
					});
			});
		},
		post: (req, res) => {
			Testimonial.create({
				author: req.body.author,
				message: req.body.message,
				user_id: req.body.userId,
				image: req.body.image,
				likes: [],
			})
				.then(response => {
					res.status(200).send(response.dataValues);
					client.get(`testimonials`, (err, reply) => {
						let replies = JSON.parse(reply);
						let entry = {};
						entry[response.id] = response.dataValues;
						client.set(`testimonials`, JSON.stringify(_.extend(replies, entry)));
					});
				});
		},
	},
	following: {
		get: (req, res) => {
			client.get(`followings_${req.params.userId}`, (err, reply) => {
				let replies = JSON.parse(reply);
				if (replies === null || err) {
					Following.findAll({
						where: { user_id: req.params.userId },
					})
						.then(response => {
							client.set(`followings_${req.params.userId}`, JSON.stringify(response[0].dataValues));
							res.status(200).send(response[0].dataValues ? response[0].dataValues : []);
						});
				} else {
					res.status(200).send(replies);
				}
			});
		},
		patch: (req, res) => {
			client.get(`followings_${req.params.userId}`, (err, reply) => {
				let replies = JSON.parse(reply);
				Following.update({
					followers: req.body.followers,
				}, {
					where: { user_id: req.params.userId },
				})
					.then(() => {
						replies.followers = req.body.followers;
						Notification.create({
							user_id: req.params.otherId,
							message: `${replies.firstName} ${replies.lastName} started following you`,
							seen: false,
							image: replies.image,
							type: 'FOLLOW',
							from: replies.id,
						});
						client.set(`followings_${req.params.userId}`, JSON.stringify(replies));
					});
			});
		},
	},
	favorites: {
		get: (req, res) => {
			client.get(`favorites_${req.params.userId}`, (err, reply) => {
				let replies = JSON.parse(reply);
				if (replies === null || err) {
					Favorite.findAll({
						where: { user_id: req.params.userId },
					})
						.then(response => {
							client.set(`favorites_${req.params.userId}`, JSON.stringify(response[0].dataValues));
							res.status(200).send(response[0].dataValues ? response[0].dataValues : []);
						});
				} else {
					res.status(200).send(replies);
				}
			});
		},
		patch: (req, res) => {
			client.get(`favorites_${req.params.userId}`, (err, reply) => {
				Favorite.update({
					entries: req.body.entries,
				}, {
					where: { user_id: req.params.userId },
				})
					.then(() => {
						let replies = JSON.parse(reply);
						replies.entries = req.body.entries;
						client.set(`favorites_${req.params.userId}`, JSON.stringify(replies));
						res.status(200).send(replies);
					});
			});
		},
	},
	image: {
		patch: (req, res) => {
			cloudinary.uploader.upload(req.file.path, (result) => {
				let imgPath = result.url;
				Profile.update({
					image: imgPath,
				}, {
					where: { user_id: req.params.userId },
				});
				Testimonial.update({
					image: imgPath,
				}, {
					where: { user_id: req.params.userId },
				});
				User.update({
					image: imgPath,
				}, {
					where: { id: req.params.userId },
				});
				client.get(`profile_${req.params.userId}`, (err, reply) => {
					let replies = JSON.parse(reply);
					replies.image = imgPath;
					client.set(`profile_${req.params.userId}`, JSON.stringify(replies));
				});
				client.get(`testimonials`, (err, reply) => {
					let replies = JSON.parse(reply);
					replies.map(e => {
						if (e.user_id === req.params.userId) {
							e.image = imgPath;
							return e;
						}
						return e;
					});
					client.set(`profile_${req.params.userId}`, JSON.stringify(replies));
				});
				client.get(`user`, (err, reply) => {
					let replies = JSON.parse(reply);
					replies.image = imgPath;
					client.set(`user`, JSON.stringify(replies));
				});
				res.sendStatus(202);
			});
		},
	},
	friends: {
		get: (req, res) => {
			let friends = [];
			Following.findAll({ where: {user_id: req.params.userId} })
				.then(response => {
					let respond = response[0].dataValues;
					respond.followers.forEach((e, i) => {
						client.get(`profile_${e}`, (err, reply) => {
							if (reply === null || err) {
								Profile.findAll({ where: {user_id: e} })
									.then(resp => {
										friends.push(resp[0].dataValues);
										client.set(`profile_${e}`, JSON.stringify(resp[0].dataValues));
										if (i + 1 === respond.followers.length) {
											let array = _.uniq(friends);
											res.status(200).send(array);
										}
									});
							} else {
								friends.push(JSON.parse(reply).dataValues);
								if (i + 1 === respond.followers.length) {
									let array = _.uniq(friends);
									res.status(200).send(array);
								}
							}
						});
					});
				});
		},
	},
	messages: {
		get: (req, res) => {
			Message.findAll({
				where: { room_name: [`_${req.params.userId}-${req.params.otherId}_`, `_${req.params.otherId}-${req.params.userId}_`] },
			})
				.then(response => {
					response.map(e => e.dataValues ? e.dataValues : e).sort((a, b) => a.id - b.id);
					res.status(200).send(response);
				});
		},
		post: (req) => {
			Message.create({
				message: req.body.message,
				user_id: req.body.user_id,
				room_name: req.body.roomNameId,
				to: req.body.to,
			})
				.then(() => {
					client.get(`profile_${req.body.user_id}`, (err, reply) => {
						let replies = JSON.parse(reply);
						Notification.create({
							user_id: req.body.to,
							message: `${replies.firstName} ${replies.lastName} sent you a message`,
							seen: false,
							image: replies.image,
							type: 'MESSAGE',
							from: req.body.user_id,
						});
					});
				});
		},
	},
	invite: {
		post: (req) => {
			Following.findAll({
				where: { user_id: req.params.userId },
			})
				.then(response => {
					let array = response[0].dataValues.followers;
					if (!array.includes(req.body.friend)) {
						array.push(req.body.friend);
						Following.update({
							followers: array,
						}, {
							where: { user_id: req.params.userId },
						});
						client.get(`followings_${req.params.user_id}`, (err, reply) => {
							let replies = JSON.parse(reply);
							replies.followers = array;
							client.set(`followings_${req.params.user_id}`, JSON.stringify(replies));
						});
					}
					client.get(`profile_${req.params.user_id}`, (err, reply) => {
						let replies = JSON.parse(reply);
						Notification.create({
							user_id: req.body.friend,
							message: `${replies.firstName} ${replies.lastName} invited you to chat`,
							seen: false,
							image: replies.image,
							type: 'INVITE',
							from: replies.id,
						});
					});
				});
		},
	},
	notify: {
		get: (req, res) => {
			client.get(`notifications`, (err, reply) => {
				let replies = JSON.parse(reply);
				Notification.findAll({
					where: {
						user_id: req.params.userId,
					},
					offset: replies !== null ? _.size(replies) : 0,
				})
					.then(resp => {
						let notes = resp.map(e => e.dataValues);
						let array = reply === null ? [] : reply;
						let all = array.concat(notes);
						res.status(200).send(all);
						client.set(`notifications`, all);
					});
			});
		},
		patch: (req, res) => {
			client.get(`notifications`, (err, reply) => {
				let replies = JSON.parse(reply);
				Notification.update({
					seen: true,
				}, {
					where: { id: req.body.note_id },
				})
					.then(() => {
						replies.map(e => {
							if (e.id === req.body.note_id) {
								e.seen = true;
								return e;
							}
							return e;
						});
						client.set(`notifications`, replies);
						res.status(202).send(replies);
					});
			});
		},
	},
	comments: {
		all: (req, res) => {
			client.get(`comments_length`, (err, reply) => {
				reply = JSON.parse(reply);
				Comment.findAll({
					offset: reply !== null ? reply : 0,
				})
					.then(resp => {
						let respond = resp.map(e => e.dataValues);
						let data = {};
						let store = {};
						let replies = null;
						respond.forEach(e => {
							store[e.post_id] = store[e.post_id] ? store[e.post_id] : {};
							store[e.post_id][e.id] = e;
						});
						_.each(store, (e, i) => {
							client.get(`comments_${i}`, (err, reply) => {
								let entry = {};
								replies = JSON.parse(reply);
								entry[e.id]  = e;
								data[i] = Object.values(e);
								client.set(`comments_${i}`, JSON.stringify(_.extend(replies, entry)));
							});
						});
						res.status(200).send(data);
					});
			});
		},
		get: (req, res) => {
			client.get(`comments_${req.params.entryId}`, (err, reply) => {
				let replies = JSON.parse(reply);
				Comment.findAll({
					where: {
						post_id: req.params.entryId,
					},
					offset: replies !== null ? _.size(replies) : 0,
				})
					.then(resp => {
						let respond = resp.map(e => e.dataValues);
						respond.forEach(e => {
							replies[e.id] = e;
						});
						res.status(200).send(Object.values(replies));
						client.set(`comments_${req.params.entryId}`, JSON.stringify(replies));
					});
			});
		},
		post: (req, res) => {
			Comment.create({
				post_id: req.params.entryId,
				message: req.body.message,
				user_id: req.body.user_id,
				author: req.body.author,
				image: req.body.image,
				likes: [],
			})
				.then(resp => {
					let entry = {};
					if (req.body.user_id !== req.body.to) {
						Notification.create({
							user_id: req.body.to,
							message: `${req.body.author} left a comment`,
							seen: false,
							image: req.body.image,
							type: 'COMMENT',
							from: req.params.entryId,
						})
							.then(response => {
								client.get(`notifications`, (err, reply) => {
									let replies = JSON.parse(reply);
									replies.push(response.dataValues);
									client.set(`notifications`, JSON.stringify(replies));
								});
								client.get(`comments_${req.params.entryId}`, (err, reply) => {
									let replies = JSON.parse(reply);
									entry[resp.dataValues.id] = resp.dataValues;
									client.set(`comments_${req.params.entryId}`, JSON.stringify(_.extend(entry, replies)));
								});
								res.status(200).send(entry);
							});
					} else {
						client.get(`comments_${req.params.entryId}`, (err, reply) => {
							let replies = JSON.parse(reply);
							entry[resp.dataValues.id] = resp.dataValues;
							client.set(`comments_${req.params.entryId}`, JSON.stringify(_.extend(entry, replies)));
						});
						res.status(200).send(entry);
					}
				});
		},
	},
	likes: {
		comment: {
			patch: (req, res) => {
				Comment.findAll({
					where: {id: req.params.entryId},
				})
					.then(resp => {
						let likes = resp[0].dataValues.likes.slice();
						if (likes.includes(req.body.user_id)) {
							_.pull(likes, req.body.user_id);
						} else {
							likes.push(req.body.user_id);
						}
						Comment.update({
							likes: likes,
						}, {
							where: {id: req.params.entryId},
						})
							.then((respond) => {
								let entry = {};
								if (req.body.user_id !== req.body.to) {
									Notification.create({
										user_id: req.body.to,
										message: `${req.body.author} like your comment`,
										seen: false,
										image: req.body.image,
										type: 'LIKE',
										from: req.params.entryId,
									})
										.then(response => {
											client.get(`notifications`, (err, reply) => {
												let replies = JSON.parse(reply);
												replies.push(response.dataValues);
												client.set(`notifications`, JSON.stringify(reply));
											});
											client.get(`comments_${resp.dataValues.post_id}`, (err, reply) => {
												let replies = JSON.parse(reply);
												entry[req.params.entryId] = response.dataValues;
												client.set(`comments_${resp.dataValues.post_id}`, JSON.stringify(_.extend(replies, entry)));
											});
											res.status(202).send(entry);
										});
								} else {
									client.get(`comments_${resp.post_id}`, (err, reply) => {
										let replies = JSON.parse(reply);
										entry[req.params.entryId] = respond.dataValues;
										client.set(`comments_${resp.post_id}`, JSON.stringify(_.extend(replies, entry)));
									});
									res.status(202).send(entry);
								}
							});
					});
			},
		},
		testify: {
			patch: (req, res) => {
				let item = null;
				client.get(`testimonials`, (err, reply) => {
					item = JSON.parse(reply)[req.params.entryId];
				});
				let likes = item.likes.slice();
				if (likes.includes(req.body.user_id)) {
					_.pull(likes, req.body.user_id);
				} else {
					likes.push(req.body.user_id);
				}
				Testimonial.update({
					likes: likes,
				}, {
					where: {id: req.params.entryId},
				})
					.then(() => {
						if (req.body.user_id !== req.body.to) {
							Notification.create({
								user_id: req.body.to,
								message: `${req.body.author} like your post`,
								seen: false,
								image: req.body.image,
								type: 'LIKE',
								from: req.params.entryId,
							})
								.then(response => {
									client.get(`notifications`, (err, reply) => {
										let replies = JSON.parse(reply);
										replies.push(response.dataValues);
										client.set(`notifications`, JSON.stringify(replies));
									});
									client.get(`testimonials`, (err, reply) => {
										let replies = JSON.parse(reply);
										replies[req.params.entryId].likes = likes;
										client.set(`testimonials`, JSON.stringify(replies));
										res.status(202).send(replies[req.params.entryId]);
									});
								});
						} else {
							client.get(`testimonials`, (err, reply) => {
								let replies = JSON.parse(reply);
								replies[req.params.entryId].likes = likes;
								client.set(`testimonials`, JSON.stringify(replies));
								res.status(202).send(replies[req.params.entryId]);
							});
						}
					});
			},
		},
	},
};
