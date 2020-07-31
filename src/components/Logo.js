import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const LogoImg = require('../assets/images/Logo.png');
const NuvensLogo = require('../assets/images/NuvensLogo.png');

const Logo = ({ type }) => {
	if (type === 'text') {
		return (
			<Container>
				<Image source={LogoImg} />
				<ImageCloud source={NuvensLogo} resizeMode="contain" />
			</Container>
		);
	}
	return <></>;
};

Logo.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Logo;

const Container = styled.View`
	margin-top: 90px;
	justify-content: center;
	align-items: center;
`;

const Image = styled.Image``;

const ImageCloud = styled.Image`
	position: absolute;
	width: 80%;
	top: -20px;
`;
