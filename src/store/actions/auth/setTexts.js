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

export const setConfirmPassword = confirmPassword => ({
	type: 'setConfirmPassword',
	payload: {
		confirmPassword,
	},
});

export const setCPFNumber = cpfNumber => ({
	type: 'setCPFNumber',
	payload: {
		cpfNumber,
	},
});

export const setCPRNumber = cprNumber => ({
	type: 'setCPRNumber',
	payload: {
		cprNumber,
	},
});

export const setPacienteList = pacienteList => ({
	type: 'setPacienteList',
	payload: {
		pacienteList,
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
