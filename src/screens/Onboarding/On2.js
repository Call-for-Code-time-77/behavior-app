import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Icon from '@expo/vector-icons/FontAwesome';

const imageOn2 = require('../../assets/images/On2.png');
const NextImg = require('../../assets/images/Enter.png');

const On2 = ({ navigation: { navigate } }) => {
	return (
		<Container>
			<Image
				source={imageOn2}
				resizeMethod="resize"
				resizeMode="contain"
			/>
			<ContainerItems>
				<ContainerIcon>
					<Icone name="circle" color="#C4A2F2" size={30} />
					<Icone name="circle" color="#9E63EE" size={30} />
					<Icone name="circle" color="#C4A2F2" size={30} />
				</ContainerIcon>

				<Text>Veja as condições de seus pacientes de perto.</Text>
				<NextButton onPress={() => navigate('On3')}>
					<NextImage source={NextImg} />
				</NextButton>
			</ContainerItems>
		</Container>
	);
};

On2.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
};

export default connect(() => ({}), {})(On2);

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
	text-align: center;
	font-weight: bold;
	bottom: 100px;
	font-family: Roboto;
	color: #000;
`;

const ContainerItems = styled.View`
	flex: 1;
	justify-content: center;
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
