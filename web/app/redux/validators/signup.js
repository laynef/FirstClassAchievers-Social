export function validate(values) {
	const errors = {};
	if (!values.email) errors.email = 'Email required';
	if (!values.password) errors.password = 'Password required';
	if (!values.repassword) errors.repassword = 'Confirm Password';
	return errors;
}