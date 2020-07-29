export const setToken = token => ({
	type: 'setToken',
	payload: {
		token,
	},
});

export const setEmail = email => ({
	type: 'setEmail',
	payload: {
		email,
	},
});

export const setName = name => ({
	type: 'setName',
	payload: {
		name,
	},
});

export const setPassword = password => ({
	type: 'setPassword',
	payload: {
		password,
	},
});

export const setIdentityNumber = identityNumber => ({
	type: 'setIdentityNumber',
	payload: {
		identityNumber,
	},
});

export const setIdentityType = identityType => ({
	type: 'setIdentityType',
	payload: {
		identityType,
	},
});
