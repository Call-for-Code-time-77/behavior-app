import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const PurpleButton = ({ title, onPress }) => (
	<Container>
		<Button onPress={() => onPress()}>
			<TextButton>{title}</TextButton>
		</Button>
	</Container>
);

PurpleButton.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
};

export default PurpleButton;

const Container = styled.View`
	justify-content: center;
	align-items: center;
`;

const Button = styled.TouchableOpacity`
	background-color: #c4a2f2;
	padding: 10px 20px;
	elevation: 10;
	border-radius: 10px;
`;

const TextButton = styled.Text`
	color: #ffff;
	font-size: 20px;
	font-weight: bold;
`;
