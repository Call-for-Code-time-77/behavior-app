import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import Icon from '@expo/vector-icons/FontAwesome';

const imageOn1 = require('../../assets/images/On1.png');
const NextImg = require('../../assets/images/Enter.png');

const On1 = ({ navigation: { navigate, dispatch } }) => {
	return (
		<Container>
			<ContainerJumpText
				onPress={() =>
					dispatch(
						CommonActions.reset({
							index: 0,
							routes: [{ name: 'SignIn' }],
						})
					)
				}>
				<JumpText>Pular</JumpText>
			</ContainerJumpText>
			<Image
				source={imageOn1}
				resizeMethod="resize"
				resizeMode="contain"
			/>
			<ContainerItems>
				<ContainerIcon>
					<Icone name="circle" color="#9E63EE" size={30} />
					<Icone name="circle" color="#C4A2F2" size={30} />
					<Icone name="circle" color="#C4A2F2" size={30} />
				</ContainerIcon>
				<Text>Descreva o seu dia.</Text>
				<NextButton onPress={() => navigate('On2')}>
					<NextImage source={NextImg} />
				</NextButton>
			</ContainerItems>
		</Container>
	);
};

On1.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		dispatch: PropTypes.func.isRequired,
	}).isRequired,
};

export default connect(() => ({}), {})(On1);

const Container = styled.View`
	flex: 1;
	background-color: #f2f2f2;
`;

const ContainerIcon = styled.View`
	flex-direction: row;
	position: absolute;
	bottom: 170px;
`;

const Icone = styled(Icon)`
	padding: 10px;
`;

const Image = styled.Image`
	width: 100%;
	top: -500px;
	position: absolute;
`;

const Text = styled.Text`
	position: absolute;
	font-size: 25px;
	font-weight: bold;
	bottom: 120px;
	font-family: Roboto;
	color: #000;
`;

const ContainerJumpText = styled.TouchableOpacity`
	flex: 1;
	margin: 60px 20px;
	align-items: flex-end;
	z-index: 1;
`;

const JumpText = styled.Text`
	color: #fff;
	font-size: 25px;
	font-family: Roboto;
	text-decoration: underline;
`;

const ContainerItems = styled.View`
	flex: 1;
	align-items: center;
`;

const NextImage = styled.Image`
	width: 70px;
	height: 70px;
`;

const NextButton = styled.TouchableOpacity`
	border-radius: 40px;
	position: absolute;
	bottom: 25px;
	right: 10px;
`;
