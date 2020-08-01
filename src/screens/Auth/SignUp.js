/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../components/Input';
import IdentityCPF from '../../components/IdentityCPF';
import IdentityCRP from '../../components/IdentityCRP';
import PurpleButton from '../../components/PurpleButton';
import {
	setName,
	setEmail,
	setPassword,
	setConfirmPassword,
	setIdentityType,
	setIdentityNumber,
	setCPFNumber,
	setCPRNumber,
} from '../../store/actions/auth/setTexts';
import {
	pressedPasswordView,
	handleSubmitSignUp,
} from '../../store/actions/auth/functions';

const NuvensSignIn = require('../../assets/images/NuvensSignIn.png');

const SignUp = ({
	name,
	setName,
	email,
	setEmail,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	cpfNumber,
	setCPFNumber,
	cprNumber,
	setCPRNumber,
	navigation: { dispatch },
}) => {
	const [desativePeopleButton, setDesativePeopleButton] = useState(false);
	const [desativeProfessionButton, setDesativeProfessionButton] = useState(
		true
	);

	const inputEmail = useRef(null);
	let inputCPF = useRef(null);
	let inputCPR = useRef(null);
	const inputPassword = useRef(null);

	const [iconEye, setIconEye] = useState('eye-slash');
	const [eyePassword, setEyePassword] = useState(true);

	const [iconConfirmEye, setIconConfirmEye] = useState('eye-slash');
	const [eyeConfirmPassword, setEyeConfirmPassword] = useState(true);

	return (
		<LinearGradient colors={['#DAC0FD', '#FFE0E2']} style={{ flex: 1 }}>
			<Container>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
						justifyContent: 'center',
					}}>
					<ContainerTop>
						<Text>Escolha uma opção:</Text>

						<ContainerButton>
							<Button
								desative={desativePeopleButton}
								right
								onPress={() => {
									setDesativePeopleButton(false);
									setDesativeProfessionButton(true);
								}}>
								<ButtonText desative={desativePeopleButton}>
									Paciente
								</ButtonText>
							</Button>
							<Button
								desative={desativeProfessionButton}
								onPress={() => {
									setDesativePeopleButton(true);
									setDesativeProfessionButton(false);
								}}>
								<ButtonText desative={desativeProfessionButton}>
									Psicólogo
								</ButtonText>
							</Button>
						</ContainerButton>
					</ContainerTop>
					<ContainerInputs>
						<Input
							placeholder="Digite seu nome completo"
							value={name}
							onChangeText={text => setName(text)}
							autoCorrect={false}
							autoCapitalize="words"
							returnKeyType="next"
							onSubmitEditing={() => {
								inputCPF.focus();
							}}
						/>

						<IdentityCPF
							placeholder="Digite seu CPF"
							returnKeyType="next"
							keyboardType="numeric"
							state={cpfNumber}
							setState={setCPFNumber}
							inputRef={ref => {
								inputCPF = ref;
							}}
							onSubmitEditing={() => {
								if (desativePeopleButton) {
									inputCPR.focus();
								} else {
									inputEmail.current.focus();
								}
							}}
						/>

						{desativePeopleButton && (
							<IdentityCRP
								placeholder="Digite seu CRP"
								returnKeyType="next"
								keyboardType="numeric"
								state={cprNumber}
								setState={setCPRNumber}
								inputRef={ref => {
									inputCPR = ref;
								}}
								onSubmitEditing={() => {
									inputEmail.current.focus();
								}}
							/>
						)}

						<Input
							placeholder="Digite seu e-mail"
							autoCorrect={false}
							autoCapitalize="none"
							keyboardType="email-address"
							returnKeyType="next"
							value={email}
							onChangeText={text => setEmail(text)}
							inputRef={inputEmail}
						/>

						<Input
							placeholder="Digite seu senha"
							rightIcon={iconEye}
							secureTextEntry={eyePassword}
							autoCorrect={false}
							autoCapitalize="none"
							returnKeyType="next"
							togglePass={pressedPasswordView(
								iconEye,
								setIconEye,
								setEyePassword
							)}
							value={password}
							onChangeText={text => setPassword(text)}
							inputRef={inputPassword}
						/>
						<Input
							placeholder="Confirme sua senha"
							rightIcon={iconConfirmEye}
							secureTextEntry={eyeConfirmPassword}
							autoCorrect={false}
							autoCapitalize="none"
							returnKeyType="next"
							togglePass={pressedPasswordView(
								iconConfirmEye,
								setIconConfirmEye,
								setEyeConfirmPassword
							)}
							value={confirmPassword}
							onChangeText={text => setConfirmPassword(text)}
						/>

						<PurpleButton
							title="Cadastrar"
							onPress={() => {
								handleSubmitSignUp(
									name,
									email,
									password,
									confirmPassword,
									cpfNumber,
									cprNumber,
									dispatch,
									CommonActions
								);
							}}
						/>
					</ContainerInputs>
					<ImageContainer>
						<Image source={NuvensSignIn} resizeMode="contain" />
					</ImageContainer>
				</ScrollView>
			</Container>
		</LinearGradient>
	);
};

SignUp.propTypes = {
	navigation: PropTypes.shape({
		dispatch: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = ({ auth: { token, name, cpfNumber, cprNumber } }) => ({
	token,
	name,
	cpfNumber,
	cprNumber,
});

const mapDispatchToProps = {
	setIdentityType,
	setIdentityNumber,
	setName,
	setEmail,
	setPassword,
	setConfirmPassword,
	setCPFNumber,
	setCPRNumber,
	handleSubmitSignUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const Container = styled.View`
	flex: 1;
	justify-content: center;
`;

const ContainerInputs = styled.View`
	margin-top: 20px;
	justify-content: center;
`;

const ContainerTop = styled.View`
	justify-content: center;
	align-items: center;
`;

const Text = styled.Text`
	font-size: 22px;
	font-family: Roboto;
	color: #9e63ee;
	font-weight: bold;
`;

const ContainerButton = styled.View`
	flex-direction: row;
	justify-content: center;
	border: 1px solid #9e63ee;
	border-radius: 10px;
`;

const Button = styled.TouchableOpacity`
	padding: 5px 10px;
	border-top-left-radius: ${props => (props.right ? '9px' : '0')};
	border-top-right-radius: ${props => (props.right ? '0' : '9px')};
	border-bottom-left-radius: ${props => (props.right ? '9px' : '0')};
	border-bottom-right-radius: ${props => (props.right ? '0' : '9px')};
	elevation: 5;
	border-color: #9e63ee;
	border-width: 1px;
	background-color: ${props => (props.desative ? '#E5E5E5' : '#F2F2F2')};
`;

const ButtonText = styled.Text`
	font-size: 20px;
	font-family: Roboto;
	color: ${props => (props.desative ? '#989C9C' : '#9E63EE')};
`;

const Image = styled.Image`
	height: 100px;
	width: 80%;
`;

const ImageContainer = styled.View`
	padding-top: 30px;
	justify-content: center;
	align-items: center;
`;
