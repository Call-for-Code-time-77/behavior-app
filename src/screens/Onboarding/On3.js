import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import Icon from '@expo/vector-icons/FontAwesome';

const imageOn3 = require('../../assets/images/On3.png');
const NextImg = require('../../assets/images/Enter.png');

const On3 = ({ navigation: { dispatch } }) => {
	return (
		<Container>
			<Image
				source={imageOn3}
				resizeMethod="resize"
				resizeMode="contain"
			/>
			<ContainerItems>
				<ContainerIcon>
					<Icone name="circle" color="#C4A2F2" size={30} />
					<Icone name="circle" color="#C4A2F2" size={30} />
					<Icone name="circle" color="#9E63EE" size={30} />
				</ContainerIcon>
				<ContainerText>
					<Text>
						Tenha um histórico do seu dia junto com as emoções que
						teve.
					</Text>
				</ContainerText>
				<NextButton
					onPress={() =>
						dispatch(
							CommonActions.reset({
								index: 0,
								routes: [{ name: 'SignIn' }],
							})
						)
					}>
					<NextImage source={NextImg} />
				</NextButton>
			</ContainerItems>
		</Container>
	);
};

On3.propTypes = {
	navigation: PropTypes.shape({
		dispatch: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = ({ auth: { token } }) => ({
	token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(On3);

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

const ContainerText = styled.View`
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 80px;
	left: 50px;
	width: 80%;
`;

const Text = styled.Text`
	font-size: 25px;
	font-weight: bold;
	font-family: Roboto;
	color: #000;
	text-align: center;
`;

const ContainerItems = styled.View`
	flex: 1;
	align-items: center;
`;

const NextImage = styled.Image`
	width: 75px;
	height: 75px;
`;

const NextButton = styled.TouchableOpacity`
	border-radius: 40px;
	position: absolute;
	bottom: 15px;
	right: 10px;
`;
