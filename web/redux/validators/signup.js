export function validate(values) {
	const errors = {};
	const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!values.email && !regex.test(values.email)) errors.email = '* Email required';
	if (!values.password) errors.password = '* Password required';
	if (!values.repassword) errors.repassword = '* Confirm Password';
	return errors;
}
