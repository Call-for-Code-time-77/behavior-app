/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/native';

import { connect } from 'react-redux';

const backbutton = require('../../../assets/images/Seta.png');
const topoLimpo = require('../../../assets/images/topoLimpo.png');
const NuvensLogo = require('../../../assets/images/NuvensLogo.png');

const Infos = ({ name, navigation: { goBack }, route }) => {
	return (
		<Container>
			<BackButton onPress={() => goBack()}>
				<BackButtonImage source={backbutton} />
			</BackButton>
			<TopImage source={topoLimpo} />
			<TextTop>Configurações</TextTop>
			<ContainerName>
				<Text>Psicologo{name}</Text>
			</ContainerName>
			<ContainerButton>
				<Text>Perfil</Text>
			</ContainerButton>
			<ContainerButton>
				<Text>Mensagens</Text>
			</ContainerButton>
			<ContainerButton>
				<Text>Notificações</Text>
			</ContainerButton>
			<ContainerButton>
				<Text>Agenda</Text>
			</ContainerButton>
			<ContainerButton>
				<Text>Dicas</Text>
			</ContainerButton>
			<ContainerButton>
				<Text>Ajuda</Text>
			</ContainerButton>
			<ContainerButton>
				<Text>Compartilhe</Text>
			</ContainerButton>
			<ContainerButton>
				<Text>Sobre</Text>
			</ContainerButton>
		</Container>
	);
};

export default connect(({ name }) => ({ name }), {})(Infos);

const Container = styled.View`
	flex: 1;
	align-items: center;
	background-color: #fff8f8;
`;

const Text = styled.Text`
	font-size: 15px;
	color: #000;
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

const ContainerButton = styled.View`
	background-color: #fff;
	padding: 10px 40px;
	width: 80%;
	margin: 5px;
	elevation: 4;
	justify-content: center;
	align-items: center;
`;

const ContainerName = styled.View`
	margin: 40px;
`;

const Image = styled.Image`
	width: 80%;
`;
