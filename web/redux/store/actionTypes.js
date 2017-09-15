const actionTypes = {

	// Login
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGIN_PENDING: 'LOGIN_PENDING',
	LOGIN_ERROR: 'LOGIN_ERROR',

	// Forgotten Password
	FORGOTTEN_PASSWORD_SUCCESS: 'FORGOTTEN_PASSWORD_SUCCESS',
	FORGOTTEN_PASSWORD_PENDING: 'FORGOTTEN_PASSWORD_PENDING',
	FORGOTTEN_PASSWORD_ERROR: 'FORGOTTEN_PASSWORD_ERROR',

	// Forgotten Password
	CHANGE_FORGOTTEN_PASSWORD_SUCCESS: 'CHANGE_FORGOTTEN_PASSWORD_SUCCESS',
	CHANGE_FORGOTTEN_PASSWORD_PENDING: 'CHANGE_FORGOTTEN_PASSWORD_PENDING',
	CHANGE_FORGOTTEN_PASSWORD_ERROR: 'CHANGE_FORGOTTEN_PASSWORD_ERROR',

	// Logout
	LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
	LOGOUT_PENDING: 'LOGOUT_PENDING',
	LOGOUT_ERROR: 'LOGOUT_ERROR',

	// Register
	REGISTER_SUCCESS: 'REGISTER_SUCCESS',
	REGISTER_PENDING: 'REGISTER_PENDING',
	REGISTER_ERROR: 'REGISTER_ERROR',

	// Testimonial
	GET_TESTIMONIAL_SUCCESS: 'GET_TESTIMONIAL_SUCCESS',
	GET_TESTIMONIAL_PENDING: 'GET_TESTIMONIAL_PENDING',
	GET_TESTIMONIAL_ERROR: 'GET_TESTIMONIAL_ERROR',

	CREATE_TESTIMONIAL_SUCCESS: 'CREATE_TESTIMONIAL_SUCCESS',
	CREATE_TESTIMONIAL_PENDING: 'CREATE_TESTIMONIAL_PENDING',
	CREATE_TESTIMONIAL_ERROR: 'CREATE_TESTIMONIAL_ERROR',

	UPDATE_TESTIMONIAL_SUCCESS: 'UPDATE_TESTIMONIAL_SUCCESS',
	UPDATE_TESTIMONIAL_PENDING: 'UPDATE_TESTIMONIAL_PENDING',
	UPDATE_TESTIMONIAL_ERROR: 'UPDATE_TESTIMONIAL_ERROR',

	// Profile
	GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
	GET_PROFILE_PENDING: 'GET_PROFILE_PENDING',
	GET_PROFILE_ERROR: 'GET_PROFILE_ERROR',

	SET_PROFILE_SUCCESS: 'SET_PROFILE_SUCCESS',
	SET_PROFILE_PENDING: 'SET_PROFILE_PENDING',
	SET_PROFILE_ERROR: 'SET_PROFILE_ERROR',

	// Change Password
	CHANGE_PASSWORD_SUCCESS: 'CHANGE_PASSWORD_SUCCESS',
	CHANGE_PASSWORD_PENDING: 'CHANGE_PASSWORD_PENDING',
	CHANGE_PASSWORD_ERROR: 'CHANGE_PASSWORD_ERROR',

	// Get User
	USER_PROFILE_SUCCESS: 'USER_PROFILE_SUCCESS',
	USER_PROFILE_PENDING: 'USER_PROFILE_PENDING',
	USER_PROFILE_ERROR: 'USER_PROFILE_ERROR',

	// Get Messages
	GET_MESSAGES_SUCCESS: 'GET_MESSAGES_SUCCESS',
	GET_MESSAGES_PENDING: 'GET_MESSAGES_PENDING',
	GET_MESSAGES_ERROR: 'GET_MESSAGES_ERROR',

	SET_MESSAGES_SUCCESS: 'SET_MESSAGES_SUCCESS',
	SET_MESSAGES_PENDING: 'SET_MESSAGES_PENDING',
	SET_MESSAGES_ERROR: 'SET_MESSAGES_ERROR',

	TYPING: 'TYPING',

	// Set Image
	SET_IMAGE_SUCCESS: 'SET_IMAGE_SUCCESS',
	SET_IMAGE_PENDING: 'SET_IMAGE_PENDING',
	SET_IMAGE_ERROR: 'SET_IMAGE_ERROR',

	// Get Friends
	GET_FRIENDS_SUCCESS: 'GET_FRIENDS_SUCCESS',
	GET_FRIENDS_PENDING: 'GET_FRIENDS_PENDING',
	GET_FRIENDS_ERROR: 'GET_FRIENDS_ERROR',

	// Followings
	GET_FOLLOWERS_SUCCESS: 'GET_FOLLOWERS_SUCCESS',
	GET_FOLLOWERS_PENDING: 'GET_FOLLOWERS_PENDING',
	GET_FOLLOWERS_ERROR: 'GET_FOLLOWERS_ERROR',

	SET_FOLLOWERS_SUCCESS: 'SET_FOLLOWERS_SUCCESS',
	SET_FOLLOWERS_PENDING: 'SET_FOLLOWERS_PENDING',
	SET_FOLLOWERS_ERROR: 'SET_FOLLOWERS_ERROR',

	// Favorites
	GET_FAVORITES_SUCCESS: 'GET_FAVORITES_SUCCESS',
	GET_FAVORITES_PENDING: 'GET_FAVORITES_PENDING',
	GET_FAVORITES_ERROR: 'GET_FAVORITES_ERROR',

	SET_FAVORITES_SUCCESS: 'SET_FAVORITES_SUCCESS',
	SET_FAVORITES_PENDING: 'SET_FAVORITES_PENDING',
	SET_FAVORITES_ERROR: 'SET_FAVORITES_ERROR',

	// Comments
	GET_COMMENT_SUCCESS: 'GET_COMMENT_SUCCESS',
	GET_COMMENT_PENDING: 'GET_COMMENT_PENDING',
	GET_COMMENT_ERROR: 'GET_COMMENT_ERROR',

	SINGLE_GET_COMMENT_SUCCESS: 'SINGLE_GET_COMMENT_SUCCESS',
	SINGLE_GET_COMMENT_PENDING: 'SINGLE_GET_COMMENT_PENDING',
	SINGLE_GET_COMMENT_ERROR: 'SINGLE_GET_COMMENT_ERROR',

	SET_COMMENT_SUCCESS: 'SET_COMMENT_SUCCESS',
	SET_COMMENT_PENDING: 'SET_COMMENT_PENDING',
	SET_COMMENT_ERROR: 'SET_COMMENT_ERROR',

	UPDATE_COMMENT_SUCCESS: 'UPDATE_COMMENT_SUCCESS',
	UPDATE_COMMENT_PENDING: 'UPDATE_COMMENT_PENDING',
	UPDATE_COMMENT_ERROR: 'UPDATE_COMMENT_ERROR',

	// Notifications
	GET_NOTIFICATIONS_SUCCESS: 'GET_NOTIFICATIONS_SUCCESS',
	GET_NOTIFICATIONS_PENDING: 'GET_NOTIFICATIONS_PENDING',
	GET_NOTIFICATIONS_ERROR: 'GET_NOTIFICATIONS_ERROR',

	CREATE_NOTIFICATIONS_SUCCESS: 'CREATE_NOTIFICATIONS_SUCCESS',
	CREATE_NOTIFICATIONS_PENDING: 'CREATE_NOTIFICATIONS_PENDING',
	CREATE_NOTIFICATIONS_ERROR: 'CREATE_NOTIFICATIONS_ERROR',

	SET_NOTIFICATIONS_SUCCESS: 'SET_NOTIFICATIONS_SUCCESS',
	SET_NOTIFICATIONS_PENDING: 'SET_NOTIFICATIONS_PENDING',
	SET_NOTIFICATIONS_ERROR: 'SET_NOTIFICATIONS_ERROR',

	// Invite Friend
	INVITE_FRIEND_SUCCESS: 'INVITE_FRIEND_SUCCESS',
	INVITE_FRIEND_PENDING: 'INVITE_FRIEND_PENDING',
	INVITE_FRIEND_ERROR: 'INVITE_FRIEND_ERROR',

	// User
	USER_EMAIL_PENDING: 'USER_EMAIL_PENDING',
	USER_EMAIL_SUCCESS: 'USER_EMAIL_SUCCESS',
	USER_EMAIL_ERROR: 'USER_EMAIL_ERROR',

};

export default actionTypes;
