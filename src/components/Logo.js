import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Logo = ({ type, onPress }) => {
	if (type === 'text') {
		return (
			<Container>
				<Text>Behavior</Text>
			</Container>
		);
	}
	return (
		<Container>
			<Button onPress={() => onPress()}>
				<TextButton>Ainda Não Feito</TextButton>
			</Button>
		</Container>
	);
};

Logo.propTypes = {
	type: PropTypes.string.isRequired,
	onPress: PropTypes.func,
};

Logo.defaultProps = {
	onPress: undefined,
};

export default Logo;

const Container = styled.View`
	margin-top: 40px;
	justify-content: center;
	align-items: center;
`;

const Text = styled.Text`
	font-size: 65px;
	font-weight: bold;
	color: #fff;
`;

const Button = styled.TouchableOpacity`
	padding: 10px 20px;
	border-radius: 10px;
`;

const TextButton = styled.Text`
	color: #ffff;
	font-size: 17px;
	text-decoration: underline;
`;
