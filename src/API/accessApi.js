import api from './api';

export const doSignIn = (email, password) => {
	return new Promise((resolve, reject) => {
		api.post('/users/signin', { email, password })
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				reject(err);
			});
	});
};

export const getPacienteList = () => {
	return new Promise((resolve, reject) => {
		api.get('/therapies/patientlist')
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				reject(err);
			});
	});
};

export const doSignUp = (
	name,
	email,
	password,
	confirmPassword,
	cpfNumber,
	cprNumber
) => {
	return new Promise((resolve, reject) => {
		api.post('/users/signup', {
			name,
			email,
			password,
			confirmPassword,
			cpfNumber,
			cprNumber,
		})
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				reject(err);
			});
	});
};
