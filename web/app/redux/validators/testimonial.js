export function validate(values) {
	const errors = {};
	if (!values.firstName) errors.firstName = '* First Name required';
	if (!values.lastName) errors.lastName = '* Last Name required';
	if (!values.message) errors.message = '* Message required';
	return errors;
}