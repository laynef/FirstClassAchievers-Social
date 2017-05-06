export function validate(values) {
	const errors = {};
	if (!values.firstName) errors.firstName = 'Enter your first name';
	if (!values.lastName) errors.lastName = 'Enter your last name';
	return errors;
}