export const mockNewUser = {
  name: 'LukeSkywalker',
  email: 'luke@skywalker.com',
  password: 'luke'
};

export const mockNewUser2 = {
	name: 'Tiger Woods',
	password: 'masters',
	email: 'eldrick@woods.com'
};

export const newUserApiResponse = {
  "status": "success",
  "message": "New user created",
  "id": 38
}

export const newUserError = {
   "error": "Key (email)=(luke@skywalker.com) already exists."
}