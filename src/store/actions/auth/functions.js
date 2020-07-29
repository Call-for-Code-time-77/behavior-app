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

export const handleSubmitSignIn = () => {};
