Array.prototype.mainSearch = function(term) {
	let regex = new RegExp(`${term}`, 'ig');
	return this.filter(e => (
		regex.test(e.author) || regex.test(e.message)
	));
};

