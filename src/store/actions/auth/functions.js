import { doSignIn, doSignUp, getPacienteList } from '../../../API/accessApi';

export const pressedPasswordView = (iconEye, setIconEye, setEyePassword) => {
	return () => {
		if (iconEye === 'eye') {
			setIconEye('eye-slash');
			setEyePassword(true);
		} else if (iconEye === 'eye-slash') {
			setIconEye('eye');
			setEyePassword(false);
		}
	};
};

export const handleSubmitSignIn = (
	password,
	email,
	dispatch,
	CommonActions,
	setToken,
	setName,
	setPacienteList
) => {
	doSignIn(email, password)
		.then(resolve => {
			if (resolve.crp) {
				getPacienteList()
					.then(response => {
						setPacienteList(response);
						setToken(resolve.hash);
						setName(resolve.name);
						dispatch(
							CommonActions.reset({
								index: 0,
								routes: [{ name: 'PsicoHome' }],
							})
						);
					})
					.catch(reject => {
						console.log(reject);
					});
			} else {
				console.log('resolve');
			}
		})
		.catch(reject => {
			console.log(reject);
		});
};

export const handleSubmitSignUp = (
	name,
	email,
	password,
	confirmPassword,
	cpfNumber,
	cprNumber,
	dispatch,
	CommonActions
) => {
	doSignUp(name, email, password, confirmPassword, cpfNumber, cprNumber)
		.then(() => {
			if (cprNumber != null) {
				dispatch(
					CommonActions.reset({
						index: 0,
						routes: [{ name: 'UserHome' }],
					})
				);
			} else {
				dispatch(
					CommonActions.reset({
						index: 0,
						routes: [{ name: 'PsicoHome' }],
					})
				);
			}
		})
		.catch(reject => {
			console.log(reject);
		});
};
