import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

import {
	setPassword,
	setEmail,
	setName,
	setToken,
	setPacienteList,
} from '../../store/actions/auth/setTexts';
import {
	pressedPasswordView,
	handleSubmitSignIn,
} from '../../store/actions/auth/functions';
import Input from '../../components/Input';
import PurpleButton from '../../components/PurpleButton';
import TextButton from '../../components/TextButton';
import Logo from '../../components/Logo';

const SignIn = ({
	email,
	setEmail,
	password,
	setPassword,
	setName,
	setPacienteList,
	setToken,
	navigation: { navigate, dispatch },
}) => {
	const [iconEye, setIconEye] = useState('eye-slash');
	const [eyePassword, setEyePassword] = useState(true);
	const passwordRef = useRef(null);

	return (
		<LinearGradient colors={['#DAC0FD', '#FFE0E2']} style={{ flex: 1 }}>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'center',
				}}>
				<Container>
					<ContainerLogo>
						<Logo type="text" />
					</ContainerLogo>
					<ContainerInputs>
						<Input
							placeholder="Digite seu e-mail"
							autoCorrect={false}
							autoCapitalize="none"
							keyboardType="email-address"
							returnKeyType="next"
							onChangeText={text => setEmail(text)}
							value={email}
							onSubmitEditing={() => {
								passwordRef.current.focus();
							}}
						/>

						<Input
							placeholder="Digite sua Senha"
							value={password}
							onChangeText={setPassword}
							rightIcon={iconEye}
							secureTextEntry={eyePassword}
							autoCorrect={false}
							autoCapitalize="none"
							togglePass={pressedPasswordView(
								iconEye,
								setIconEye,
								setEyePassword
							)}
							returnKeyType="send"
							inputRef={passwordRef}
							onSubmitEditing={() =>
								handleSubmitSignIn(
									password,
									email,
									dispatch,
									CommonActions,
									setToken,
									setName,
									setPacienteList
								)
							}
						/>

						<PurpleButton
							title="Entrar"
							onPress={() =>
								handleSubmitSignIn(
									password,
									email,
									dispatch,
									CommonActions,
									setToken,
									setName,
									setPacienteList
								)
							}
						/>

						<TextButton
							title="Não tem conta? Cadastre-se"
							onPress={() => navigate('SignUp')}
						/>
					</ContainerInputs>
				</Container>
			</ScrollView>
		</LinearGradient>
	);
};

SignIn.propTypes = {
	setName: PropTypes.func.isRequired,
	setToken: PropTypes.func.isRequired,
	setPassword: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	setEmail: PropTypes.func.isRequired,
	password: PropTypes.string.isRequired,
	setPacienteList: PropTypes.shape([]).isRequired,
	navigation: PropTypes.shape({
		dispatch: PropTypes.func.isRequired,
		navigate: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = ({ auth: { token, email, password } }) => ({
	token,
	password,
	email,
});

const mapDispatchToProps = {
	setName,
	setToken,
	setPassword,
	setPacienteList,
	pressedPasswordView,
	handleSubmitSignIn,
	setEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const Container = styled.View`
	flex: 1;
`;

const ContainerLogo = styled.View`
	flex: 1;
`;

const ContainerInputs = styled.View`
	flex: 1;
`;
