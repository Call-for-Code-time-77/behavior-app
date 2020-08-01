/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/native';

import { connect } from 'react-redux';
import Icon from '@expo/vector-icons/FontAwesome';

const graf = require('../../../assets/images/graf.png');
const backbutton = require('../../../assets/images/Seta.png');
const topoLimpo = require('../../../assets/images/topoLimpo.png');
const nuvens = require('../../../assets/images/NuvensLogo.png');

const Infos = ({ navigation: { goBack }, route }) => {
	const { data } = route.params;
	const { name, cpf } = data.patient;

	return (
		<Container>
			<BackButton onPress={() => goBack()}>
				<BackButtonImage source={backbutton} />
			</BackButton>
			<TopImage source={topoLimpo} />
			<TextTop>Informações</TextTop>
			<Titulo>Detalhes do Paciente</Titulo>

			<ContainerDetails>
				<ContainerText>
					<Icon name="user" size={24} color="#9E63EE" />
					<TextName>{name}</TextName>
				</ContainerText>
				<Text>CPF: {cpf}</Text>
				<Text>Mensagem: </Text>
				<Text>Laudo do paciente: </Text>
			</ContainerDetails>
			<TituloEv>Evolução</TituloEv>
			<Image source={graf} resizeMode="contain" />

			<ImageCloud source={nuvens} resizeMode="contain" />
		</Container>
	);
};

export default connect(() => ({}), {})(Infos);

const Container = styled.View`
	flex: 1;
	align-items: center;
	background-color: #fff8f8;
`;

const Text = styled.Text`
	font-size: 15px;
`;

const Titulo = styled.Text`
	margin-top: 20px;
	color: #9e63ee;
	font-size: 20px;
	font-weight: bold;
`;

const TituloEv = styled.Text`
	margin-top: 70px;
	color: #9e63ee;
	font-size: 20px;
	font-weight: bold;
`;

const ContainerText = styled.View`
	align-items: center;
	align-items: center;
	flex-direction: row;
	justify-content: flex-start;
`;

const TextName = styled.Text`
	margin-left: 10px;
	font-size: 24px;
	color: #f78c94;
`;

const ContainerDetails = styled.View`
	border-radius: 10px;
	width: 60%;
	padding: 20px;
`;

const Image = styled.Image`
	height: 20%;
	width: 100%;
`;

const TopImage = styled.Image`
	width: 100%;
`;

const TextTop = styled.Text`
	font-size: 25px;
	position: absolute;
	right: 30px;
	top: 40px;
	color: #fff;
`;

const BackButton = styled.TouchableOpacity`
	position: absolute;
	z-index: 2;
	left: 30px;
	top: 40px;
`;

const BackButtonImage = styled.Image``;

const ImageCloud = styled.Image`
	width: 80%;
`;
