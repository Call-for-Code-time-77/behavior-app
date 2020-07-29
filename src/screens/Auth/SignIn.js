import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
// import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

import {
	setPassword,
	setIdentityType,
	setIdentityNumber,
} from '../../store/actions/auth/setTexts';
import {
	pressedPasswordView,
	handleSubmitSignIn,
} from '../../store/actions/auth/functions';
import Input from '../../components/Input';
import IdentityInput from '../../components/IdentityInput';
import PurpleButton from '../../components/PurpleButton';
import TextButton from '../../components/TextButton';
import Logo from '../../components/Logo';
import Cloud from '../../components/Cloud';

const SignIn = ({
	identityNumber,
	setIdentityNumber,
	identityType,
	setIdentityType,
	password,
	handleSubmitSignIn,
	setPassword,
	// navigation: { dispatch },
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
						<ContainerCloud>
							<Cloud pos="1" />
							<Cloud pos="2" />
							<Cloud pos="3" />
						</ContainerCloud>
					</ContainerLogo>
					<ContainerInputs>
						<IdentityInput
							placeholder="Digite seu CPF ou CRP"
							setState={setIdentityNumber}
							state={identityNumber}
							setIdentityType={setIdentityType}
							identityType={identityType}
							returnKeyType="next"
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
									identityNumber,
									identityType
								)
							}
						/>

						<PurpleButton
							title="Entrar"
							onPress={() =>
								handleSubmitSignIn(
									password,
									identityNumber,
									identityType
								)
							}
						/>

						<TextButton
							title="Não tem conta? Cadastre-se"
							onPress={
								() => console.log('SignUp')
								// navigate('')
							}
						/>
					</ContainerInputs>
				</Container>
			</ScrollView>
		</LinearGradient>
	);
};

SignIn.propTypes = {
	identityNumber: PropTypes.string.isRequired,
	setIdentityNumber: PropTypes.func.isRequired,
	setPassword: PropTypes.func.isRequired,
	identityType: PropTypes.string.isRequired,
	setIdentityType: PropTypes.func.isRequired,
	password: PropTypes.string.isRequired,
	handleSubmitSignIn: PropTypes.func.isRequired,
	navigation: PropTypes.shape({
		dispatch: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = ({
	auth: { token, identityNumber, identityType, password },
}) => ({
	token,
	identityType,
	identityNumber,
	password,
});

const mapDispatchToProps = {
	setPassword,
	setIdentityType,
	setIdentityNumber,
	pressedPasswordView,
	handleSubmitSignIn,
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

const ContainerCloud = styled.View`
	flex: 1;
	flex-direction: row;
`;
