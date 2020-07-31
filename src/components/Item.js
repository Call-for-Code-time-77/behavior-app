/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';

export const Item = ({ data, selected, onSelect, navigate }) => {
	const { name } = data.patient;
	return (
		<Container>
			<Title>{name}</Title>
			<ContainerInternal>
				<Text>Situação: Em Tratamento</Text>
				<Text>Mensagem: Mensagem Teste </Text>
				<AccessButton
					onPress={() => {
						onSelect(data._id);
						navigate('Infos', { data });
					}}
					selected={selected}>
					<TextButton>Detalhar Paciente</TextButton>
				</AccessButton>
			</ContainerInternal>
		</Container>
	);
};

const Container = styled.View`
	elevation: 7;
	border-radius: 10px;
	padding: 20px;
	margin-bottom: 10px;
`;

const Text = styled.Text`
	color: #9e63ee;
	font-size: 18px;
`;

const ContainerInternal = styled.View`
	margin-left: 20px;
`;

const Title = styled.Text`
	padding-top: 10px;
	margin-left: 20px;
	font-size: 25px;
	font-weight: bold;
	color: #9e63ee;
`;

const AccessButton = styled.TouchableOpacity`
	margin: 20px 20px 0 0;
	padding: 10px 20px;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
	background-color: #9e63ee;
`;

const TextButton = styled.Text`
	color: #fff;
	font-size: 20px;
`;
