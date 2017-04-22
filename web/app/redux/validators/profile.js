export function validate(values) {
	const errors = {};
	if (!values.firstName) errors.firstName = 'Enter your first name';
	if (!values.lastName) errors.lastName = 'Enter your last name';
	if (!values.city) errors.city = 'Enter your city';
	if (!values.state) errors.state = 'Enter your state';
	if (!values.country) errors.country = 'Enter your country';
	if (!values.zipCode) errors.zipCode = 'Enter your zip code';
	if (!values.goals) errors.goals = 'What are your goals?';
	if (!values.position) errors.position = 'Enter your current position';
	return errors;
}